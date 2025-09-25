type ValidationOptions = {
    type: "email" | "text" | "password" | "number";
    min?: number;
    max?: number;
    difficulty?: "simple" | "strict"; // for password
    required?: boolean;
    // Removed [key: string]: any; - causes type conflicts
};

export default function validate(
    value: string,
    options: ValidationOptions
): string {
    const opts = {
        min: 1,
        max: 255,
        difficulty: "simple" as const,
        required: true,
        ...options,
    };

    // Required check
    if (opts.required && (!value || value.trim() === "")) {
        return "This field is required";
    }

    switch (opts.type) {
        case "email":
            // Better email regex that's more accurate
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                return "Please enter a valid email address";
            }
            break;

        case "number":
            // Fixed: Handle edge cases for number validation
            const trimmedValue = value.trim();

            // Check for empty string after trimming
            if (trimmedValue === "") {
                return "Please enter a valid number";
            }
            // Fixed regex: was allowing invalid formats like "." or "-"
            else if (!/^-?\d+(\.\d+)?$/.test(trimmedValue)) {
                return "Please enter a valid number";
            }
            // Check if it's a valid finite number
            else if (!isFinite(Number(trimmedValue))) {
                return "Please enter a valid number";
            }
            break;

        case "password":
            // Length validation
            if (value.length < opts.min) {
                return `Password must be at least ${opts.min} characters`;
            } else if (value.length > opts.max) {
                return `Password must be at most ${opts.max} characters`;
            } else if (opts.difficulty === "strict") {
                // Check all strict requirements and collect all errors
                const strictErrors: string[] = [];

                if (!/[0-9]/.test(value)) {
                    strictErrors.push("contain at least one number");
                }
                if (!/[a-z]/.test(value)) {
                    strictErrors.push("contain at least one lowercase letter");
                }
                if (!/[A-Z]/.test(value)) {
                    strictErrors.push("contain at least one uppercase letter");
                }
                if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)) {
                    strictErrors.push("contain at least one special character");
                }
                if (/\s/.test(value)) {
                    strictErrors.push("not contain spaces");
                }

                if (strictErrors.length > 0) {
                    return `Password must ${strictErrors.join(", ")}`;
                }
            }
            break;

        case "text":
        default:
            if (value.length < opts.min) {
                return `This field must be at least ${opts.min} characters`;
            } else if (value.length > opts.max) {
                return `This field must be at most ${opts.max} characters`;
            }
            break;
    }
    return ""

}
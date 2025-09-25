type ValidationOptions = {
    type: "email" | "text" | "password" | "number";
    min?: number;
    max?: number;
    difficulty?: "simple" | "strict"; // for password
    required?: boolean;
    // Removed [key: string]: any; - causes type conflicts
};

type ValidationResult = {
    valid: boolean;
    errors: Record<string, string>;
};

export function validate(
    fieldName: string,
    value: string,
    options: ValidationOptions
): ValidationResult {
    const errs: Record<string, string> = {};
    const opts = {
        min: 1,
        max: 255,
        difficulty: "simple" as const,
        required: true,
        ...options,
    };

    // Required check
    if (opts.required && (!value || value.trim() === "")) {
        errs[fieldName] = "This field is required";
        return { valid: false, errors: errs };
    }

    // Skip validation for non-required empty fields
    if (!opts.required && (!value || value.trim() === "")) {
        return { valid: true, errors: {} };
    }

    switch (opts.type) {
        case "email":
            // Better email regex that's more accurate
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                errs[fieldName] = "Please enter a valid email address";
            }
            break;

        case "number":
            // Fixed: Handle edge cases for number validation
            const trimmedValue = value.trim();
            
            // Check for empty string after trimming
            if (trimmedValue === "") {
                errs[fieldName] = "Please enter a valid number";
            }
            // Fixed regex: was allowing invalid formats like "." or "-"
            else if (!/^-?\d+(\.\d+)?$/.test(trimmedValue)) {
                errs[fieldName] = "Please enter a valid number";
            }
            // Check if it's a valid finite number
            else if (!isFinite(Number(trimmedValue))) {
                errs[fieldName] = "Please enter a valid number";
            }
            break;

        case "password":
            // Length validation
            if (value.length < opts.min) {
                errs[fieldName] = `Password must be at least ${opts.min} characters`;
            } else if (value.length > opts.max) {
                errs[fieldName] = `Password must be at most ${opts.max} characters`;
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
                    errs[fieldName] = `Password must ${strictErrors.join(", ")}`;
                }
            }
            break;

        case "text":
        default:
            if (value.length < opts.min) {
                errs[fieldName] = `This field must be at least ${opts.min} characters`;
            } else if (value.length > opts.max) {
                errs[fieldName] = `This field must be at most ${opts.max} characters`;
            }
            break;
    }

    return { valid: Object.keys(errs).length === 0, errors: errs };
}
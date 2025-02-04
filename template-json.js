// @ts-check


enum Type {
    STRING = "string",
    INTEGER = "integer",
    DECIMAL = "decimal",
    BOOLEAN = "boolean",
    OBJECT = "object",
    ARRAY = "array"
}

export const template = {
    personal: {
        meta: {
            title: "Personal Information",
            description: "Enter your personal details",
            type: Type.OBJECT
        },
        value: {
            name: {
                title: "Name",
                description: "Enter your name",
                type: Type.STRING
            },
            surname: "",
            email: "",
            phone: ""
        }
    },
    education: {
        title: "Education",
        description: "Enter your education details. It does not matter the order, it will be sorted by the start date.",
        isMultiple: true,
        value: {
            degree: {
                title: "Degree",
                description: "Enter your degree",
                isMultiple: false
            },
            university: {
                title: "University",
                description: "Enter your university",
                isMultiple: false
            },
            start: {
                title: "Start",
                description: "Enter the start date",
                isMultiple: false
            },
            end: {
                title: "End",
                description: "Enter the end date",
                isMultiple: false
            },
        }

    },
    projects: {
        title: "Projects",
        description: "Enter all your projects. Select the checkbox if you want the project to" +
            "also be considered experience. This way it will also be added to the experience section ordered" +
            "by end date.",
        isMultiple: true,
        value: {
            title: "",
            description: "",
            start: "",
            end: "",
            isExperience: false
        }

    },
    experience: {
        title: "Experience",
        description: "Enter all your experience. It does not matter the order, it will be sorted by the end date.",
        isMultiple: true,
        value: {
            company: {
                title: "Company",
                description: "Enter the company name, it will not be used if you checked freelance checkbox",
                isMultiple: false
            },
            description: {
                title: "Description",
                description: "Enter the description of your role.",
                isMultiple: false
            },
            start: {
                title: "Start",
                description: "Enter the start date",
                isMultiple: false
            },
            end: {
                title: "End",
                description: "Enter the end date",
                isMultiple: false
            }
        }
    }

};
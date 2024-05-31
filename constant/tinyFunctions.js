
const  formatDate =(ISOdate) =>{
    let date = new Date(ISOdate)
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const validateChildData = (childName, gender, dob) => {
    const currentDate = new Date();

    // Name validation: Check if it's a non-empty string
    if (typeof childName !== 'string' || childName.trim() === '') {
        return { isValid: false, message: 'Invalid child name. It must be a non-empty string.' };
    }

    // Gender validation: Check if it's either 'male' or 'female'
    if (gender !== 'male' && gender !== 'female') {
        return { isValid: false, message: 'Invalid gender. It must be either "male" or "female".' };
    }

    // Date of Birth validation: Check if it's a valid date and the child is older than 5 years
    let dobDate = new Date(dob);
    if (isNaN(dobDate.getTime())) {
        return { isValid: false, message: 'Invalid date of birth. It must be a valid date.' };
    }

    let ageInMilliseconds = currentDate - dobDate;
    let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Approximate year considering leap years

    if (ageInYears < 5) {
        return { isValid: false, message: 'Invalid date of birth. The child must be older than 5 years.' };
    }

    // If all validations pass
    return { isValid: true, message: 'All inputs are valid.' };
};

export {formatDate , validateChildData}
function Validator(options) {
    var formElement = document.querySelector(options.form)
    if (formElement) {
        options.rules.forEach(rule => {
            var inputElement = formElement.querySelector(rule.selector)
            var errorElement = inputElement.parentElement.querySelector('.form-message')
            if (inputElement) {
                inputElement.onblur = () => {
                    var errorMessage = rule.test(inputElement.value)

                    if (errorMessage) {
                        errorElement.innerText = errorMessage
                        inputElement.parentElement.classList.add('invalid')
                    } else {
                       errorElement.innerText = "" 
                       inputElement.parentElement.classList.remove('invalid')
                    }
                }
            }
        });
    }
}

// định nghĩa rules
//nguyên tắc rule:
// 1. khi có lỗi => message error
// 2. khi ko có lỗi => undefined
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: (value) => {
            return value.trim() ? undefined : 'vui lòng nhập đủ trường này'
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: () => {
            
        }
    }
}
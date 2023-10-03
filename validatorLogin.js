/////////////////doi tuong Validator
function Validator(options) {
    let saveRules = {};//luu lai cac rule

    ////////////////ham thuc thi eerrmess 
    function Validate(elementInput, rulesInput) {
        let errElement = elementInput.parentElement.querySelector(options.selectorElement)//truy cap vao errmess class '.form-message'
        let erroMess;

        //lay ra cac rulesInput va xu ly(lang nghe su kien bkur,input... )
        let ruless = saveRules[rulesInput.selector];

        //lap qua tung rule r kiem tra co value 
        //neu co loi thi dung kiem tra
        for (let i = 0; i < ruless.length; i++) {
            erroMess = ruless[i](elementInput.value)
            if (erroMess) break;
        }

        //thong bao hien ra loi errmesselementInput
        if (erroMess) {
            errElement.innerText = erroMess;
            elementInput.parentElement.classList.add('invalid')
        } else {
            errElement.innerText = '';
            elementInput.parentElement.classList.remove('invalid')
        }
        return !erroMess;
    }

    ///////////////lay element cua form
    let formElement = document.querySelector(options.form);

    //////////////Khi bo di hanh dong submit mac dịnh cua form
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();//LOAI BO SUBMIT mac dinh

            let checkData = true;
            //lap qua tung rules và Validate rồi check đã nhập hay chưa r hiển thị errmess
            elementRules.forEach(function (rulesInput) {
                let elementInput = formElement.querySelector(rulesInput.selector);
                let check = Validate(elementInput, rulesInput);
                if (!check) {
                    checkData = false;
                }
            })

            ///////check register///
            if (checkData) {
                let valueData = formElement.querySelectorAll('[name]')
                let valueUser = document.getElementById("input-fisrtname").value
                let formValues = Array.from(valueData).reduce(function (value, input) {
                    value[input.name] = input.value
                    return value;
                }, {});
                localStorage.setItem(valueUser, JSON.stringify(formValues));    ////thêm vào  
                options.onSubmit(formValues);
            }

            /////////check login////
            // if (checkData) {
            //     let userName = document.getElementById("input-fisrtname").value;
            //     let password = document.getElementById("input-password").value;
            //     let user = localStorage.getItem(userName);
            //     let data = JSON.parse(user)
            //     options.onSubmitLogin(data);
            // }
        }
    }
    /////////////////////////////////////////
    let elementRules = options.rules;
    elementRules.forEach(function (rulesInput) {
        //luu lai cac rule  cho moi input 

        if (Array.isArray(saveRules[rulesInput.selector])) {
            saveRules[rulesInput.selector].push(rulesInput.test);
        } else {
            saveRules[rulesInput.selector] = [rulesInput.test];
        }

        let elementInput = formElement.querySelector(rulesInput.selector);

        if (elementInput) {
            //check nguoi dung nhap hay chua
            elementInput.oninput = function () {
                let errElement = elementInput.parentElement.querySelector(options.selectorElement)//truy cap vao errmess class '.form-message'
                errElement.innerText = '';
                elementInput.parentElement.classList.remove('invalid')
            }
            //check nguoi dung roi khoi input
            elementInput.onblur = function () {
                Validate(elementInput, rulesInput);
            }
        }
    })
}


//Dinh nghia rules
//quy tac errmess:
//1.co loi thi tra ve err
//2.khong co thi tra ve undefine
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : '*Vui lòng nhập trường này ';
        }
    };
}

Validator.isEmail = function (selector, mess) {
    return {
        selector: selector,
        test: function (value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : mess || '*Trường nhập không phải email  ';
        }
    };
}

Validator.minLengh = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `*Vui lòng nhập tối thiểu ${min} kí tự `
        }
    };
}

Validator.isConfirmed = function (selector, getValuePass, mess) {
    return {
        selector: selector,
        test: function (value) {
            return value === getValuePass() ? undefined : '*Giá trị nhập chưa chính xác ';
        }
    }
}
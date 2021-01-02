
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import FormField from "../components/formField";

const Register = (props) => {
    //history object
    const history = useHistory()

    //vars for the form
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [city, setCity] = useState('')
    const [profileImg, setProfileImg] = useState('')
    const [email,setEmail] = useState('')
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [Birthday,setBirthday] = useState('')
    const [streetName,setStreetName] = useState('')
    

    //list of cities
    const [cities, setCities] = useState([])

    //update the list of cities once the page load
    useEffect(() => {
        getCitiesFromJson();
    }, []);

    //get all the cities from the JSON file
    const getCitiesFromJson = async () => {
        let response = await fetch('./data/israel-cities.json');
        let data = await response.json(); //the values
        setCities(data);
    }

    //validate the register form
    const checkForm = () => {
        /*
         == -> בודק את הערך
         === -> בודק את הערך ואת הטיפוס

         5 == '5' true
         5 === '5' false
        */

        if (userName === '' || password === '' || confirmPassword === '' || city === '' || email === '' || firstName === '' ||
        lastName === '' || Birthday === '' || streetName === '') {
            alert('יש למלא את כל השדות')
            return false;
        }

        if (password === confirmPassword)
            return true;
        else {
            alert(`הסיסמאות לא תואמות`)
            return false;
        }
    }

    const uploadImage = (input) => {
        if (input.files && input.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                setProfileImg(e.target.result);
            }

            reader.readAsDataURL(input.files[0]); //convert to base64 string
        }
    }


    //signup function -> after clicking the register button
    const signup = (event) => {
        event.preventDefault(); //ביטול ניקוי הטופס באופן דיפולטיבי
        if (checkForm()) {
            let user = { userName, password, city, profileImg,email,firstName,lastName,Birthday,streetName }
            /*
            let user = {
                userName: userName,
                password: password,
                city: city,
                profileImg: profileImg
            }
            */
            localStorage.setItem('user', JSON.stringify(user))
            alert(`נרשמת בהצלחה!`)
            history.push('Login')
            //console.log('history =>',history)
        }
    }
  
    /*
        let --> משתנה מקומי שנוצר רק לאחר השמה של ערך
        var --> משתנה גלובלי
        const --> קבוע
    */


    return (
        <div className="container">
            <form onSubmit={signup}>
                <FormField type="text" name="שם משתמש" action={setUserName} />
                <FormField type="password" name="סיסמה" action={setPassword} />
                <FormField type="password" name="אימות סיסמה" action={setConfirmPassword} />
                <FormField type="email" name="E-Mail" action={setEmail} />
                <FormField type="text" name="שם פרטי" action={setFirstName} />
                <FormField type="text" name="שם משפחה" action={setLastName} />
                <FormField type="date" name="תאריך לידה" action={setBirthday} />
                <FormField type="list" listId="listOfCities" data={cities} name="עיר" action={setCity} />
                <FormField type="text" name="רחוב" action={setStreetName} />

                <FormField type="file" name="תמונה" targetImg={profileImg} action={uploadImage} />

                <button type="submit">הרשמה</button>
                <button type="reset">ניקוי</button>
            </form>
        </div>
    )
}

export default Register;
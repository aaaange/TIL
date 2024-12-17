import { useState } from "react";

const Register = ()=> {
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeBio = (e) => {
        setBio(e.target.value);
    }

    return (
        <div>
            <div>
                <input 
                    value={name}
                    onChange={onChangeName} 
                    placeholder={"이름"} />
            </div>
            <div>
                <input 
                    value={birth}
                    type="date"
                    onChangeBirth={onChangeBirth} />
            </div>
            <div>
                <select 
                    value={country}
                    onChangeCountry={onChangeCountry}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea 
                    value={bio}
                    onChangeBio={onChangeBio}/>
            </div>

        </div>
    )
}

export default Register;
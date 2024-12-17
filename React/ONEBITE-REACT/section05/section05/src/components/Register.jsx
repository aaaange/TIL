import { useState } from "react";

const Register = ()=> {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    })

    const onChangeName = (e) => {
        setInput({
            ...Input,
            name : e.target.value
        })
    }

    const onChangeBirth = (e) => {
        setInput({
            ...Input,
            birth : e.target.value
        })
    }

    const onChangeCountry = (e) => {
        setInput({
            ...Input,
            country : e.target.value
        })
    }

    const onChangeBio = (e) => {
        setInput({
            ...Input,
            bio : e.target.value
        })
    }

    return (
        <div>
            <div>
                <input 
                    value={input.name}
                    onChange={onChangeName} 
                    placeholder={"이름"} />
            </div>
            <div>
                <input 
                    value={input.birth}
                    type="date"
                    onChange={onChangeBirth} />
            </div>
            <div>
                <select 
                    value={input.country}
                    onChange={onChangeCountry}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea 
                    value={input.bio}
                    onChange={onChangeBio}/>
            </div>

        </div>
    )
}

export default Register;
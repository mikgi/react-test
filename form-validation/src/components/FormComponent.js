import './FormComponent.css';
import { useState } from 'react';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    return (
        <div className="container">
            <form className="form">
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className="form-control">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                    <small>Error message</small>
                </div>
                <div className="form-control">
                    <label>อีเมล</label>
                    <input type="text" className="form-control" id="email"  placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                    <small>Error message</small>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>   
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                    <small>Error message</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="password" className="form-control" id="password2" placeholder="Confirm your password" value={formData.password2} onChange={handleChange} />
                    <small>Error message</small>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormComponent;
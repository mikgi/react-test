import './FormComponent.css';
import { useState } from 'react';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
        
        // ถ้าผู้ใช้เริ่มพิมพ์ใหม่ ให้ลบ error ของช่องนั้นออก
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: '' }));
        }
    };

    const validateForm = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'กรุณากรอกชื่อผู้ใช้';
        } else if (formData.name.trim().length < 4) {
            newErrors.name = 'กรุณากรอกชื่อผู้ใช้ 4 ตัวอักษรขึ้นไป';
        } else if (formData.name.trim().length > 15) {
            newErrors.name = 'กรุณากรอกชื่อผู้ใช้ไม่เกิน 15 ตัวอักษร';
        }

        // Email validation
        // const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email.trim()) {
            newErrors.email = 'กรุณากรอกอีเมล';
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = 'อีเมลไม่ถูกต้อง';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'กรุณากรอกรหัสผ่าน';
        } else if (formData.password.length < 6) {
            newErrors.password = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร';
        } else if (formData.password.length > 25) {
            newErrors.password = 'รหัสผ่านต้องมีไม่เกิน 25 ตัวอักษร';
        }

        // Confirm Password validation
        if (!formData.password2) {
            newErrors.password2 = 'กรุณากรอกยืนยันรหัสผ่าน';
        } else if (formData.password !== formData.password2) {
            newErrors.password2 = 'ยืนยันรหัสผ่านไม่ตรงกัน';
        }

        setErrors(newErrors);

        // หากไม่มี Error เลย ถือว่าผ่าน
        if (Object.keys(newErrors).length === 0) {
            alert('ลงทะเบียนสำเร็จ!');
            // นำข้อมูล formData ไปใช้งานต่อได้ที่นี่
        }
    };

    // Helper function สำหรับจัดการ Class (success / error)
    const getControlClass = (field) => {
        if (errors[field]) return 'form-control error';
        if (formData[field] && !errors[field]) return 'form-control success';
        return 'form-control';
    };

    return (
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>แบบฟอร์มลงทะเบียน</h2>
                
                <div className={getControlClass('name')}>
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                    <small>{errors.name || 'Error message'}</small>
                </div>
                
                <div className={getControlClass('email')}>
                    <label>อีเมล</label>
                    <input type="text" id="email"  placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                    <small>{errors.email || 'Error message'}</small>
                </div>
                
                <div className={getControlClass('password')}>
                    <label>รหัสผ่าน</label>   
                    <input type="password" id="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                    <small>{errors.password || 'Error message'}</small>
                </div>
                
                <div className={getControlClass('password2')}>
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="password" id="password2" placeholder="Confirm your password" value={formData.password2} onChange={handleChange} />
                    <small>{errors.password2 || 'Error message'}</small>
                </div>
                
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    );
}

export default FormComponent;
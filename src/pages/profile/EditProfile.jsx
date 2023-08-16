import Navbar from './../component/Navbar';
import './../assets/css/editprofile.css';

export default function DetailProfile() {
    function onUpdateProfile(e) {
        e.preventDefault();
        alert("update profile")
    }

    return (
        <>
            <Navbar/>
            <section className="change-profile-section">
                <img src={localStorage.getItem("photo")} width="250" loading="eager" decoding="async" id="profile-image" alt={localStorage.getItem("name")}/>
            
                <form onSubmit={onUpdateProfile}>
                    <div className="photo-file">
                        <input type="file" accept="image/*" name="image-path" id="image-path"/>
                        <label htmlFor="image-path">Change Profile Picture</label>
                    </div>
                    <br/>
                    <label htmlFor="name">
                        Name <br/>
                        <input type="text" name="name" id="name" value={localStorage.getItem("name")}/>
                    </label>
                    <br/>
                    <button type="submit">Update Profile</button>
                </form>
            </section>
        </>
    )
}

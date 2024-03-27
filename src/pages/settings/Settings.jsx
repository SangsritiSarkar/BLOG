// import "./settings.css";
// import Sdb from "../../components/sdb/Sdb";

// export default function Settings() {
//   return (
//     <div className="settings">
//         <div className="settingsWrapper">
//             <div className="settingsTitle">
//                 <span className="settingsUpdateTitle">Update Your Account</span>
//                 <span className="settingsDeleteTitle">Delete Your Account</span>
//             </div>
//             <form className="settingsForm">
//                 <label>Profile Picture</label>
//                 <div className="settingsPP">
//                     <img 
//                         src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
//                         alt="" 
//                     />
//                     <label htmlFor="fileInput">
//                       <i className="settingsPPIcon fa-regular fa-circle-user"></i>
//                     </label>
//                     <input type="file" id="fileInput" style={{display:"none"}}/>
//                 </div>
//                 <label>Username</label>
//                 <input type="text" placeholder="Name"/>
//                 <label>Email</label>
//                 <input type="email" placeholder="abc@gmail.com"/>
//                 <label>Password</label>
//                 <input type="password"/>
//                 <button className="settingsSubmit">Update</button>
//             </form>
//         </div>
//         <Sdb/>
//     </div>
//   );
// }
import "./settings.css";
import Sdb from "../../components/sdb/Sdb";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sdb />
    </div>
  );
}
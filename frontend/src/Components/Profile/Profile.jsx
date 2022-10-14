import EditProfile from "./EditProfile";
import "./Profile.css"

const Profile=()=>{
    return (
      <div class="container emp-profile">
        <div className="eleven">
          <h1>Profile</h1>
        </div>
        <form method="post">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                  alt=""
                />
                {/* <div class="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div> */}
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
                <h5>Kshiti Ghelani</h5>
                <h6>Student/Mentor/Alumni</h6>
                <p class="proile-rating">
                  Questions : <span>8</span>
                </p>
                <p class="proile-rating">
                  Answers : <span>8</span>
                </p>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li class="nav-item"></li>
                </ul>
              </div>
            </div>
            <div class="col-md-2">
              {/* <EditProfile /> */}
             
            </div>
          </div>
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-8">
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div class="col-md-6">
                      <p>Kshiti123</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Name</label>
                    </div>
                    <div class="col-md-6">
                      <p>Kshiti Ghelani</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>kshitighelani@gmail.com</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Branch</label>
                    </div>
                    <div class="col-md-6">
                      <p>Zahle</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Cylce</label>
                    </div>
                    <div class="col-md-6">
                      <p>Z01</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
}
export default Profile;
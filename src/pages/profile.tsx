import { useEffect, useState } from "react";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosInstance";

interface IAvatar {
  high: string;
  medium: string;
  low: string;
}

interface IProfile {
  name: string;
  email: string;
  avatar: IAvatar;
}

const Profile: React.FC = () => {
  const [profileInfo, setProfileInfo] = useState<IProfile>();

  useEffect(() => {
    document.title = "B2bit - Profile";

    const token = localStorage.getItem("accessToken");

    const url = "/auth/profile/";

    axiosInstance
      .get(url)
      .then(function (response) {
        setProfileInfo(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <section className="bg-bgProfilePage h-screen">
      <header className="bg-white flex justify-center lg:justify-end ">
        <Link to="/">
          <Button
            text="Logout"
            className="bg-azulB2bit rounded-lg text-white font-inter font-bold text-lg w-72 h-11 m-3 hover:bg-azulB2bitHover transition ease-in-out duration-300 text-center"
            onClick={() => {
              localStorage.removeItem("accessToken");
            }}
          />
        </Link>
      </header>

      <div className="flex justify-center items-center flex-col pt-24">
        <div className="bg-bgdivProfile rounded-2xl w-96 p-4 shadow-profilePage">
          <div className="flex-col flex justify-center items-center m-8">
            <h1 className="font-nunito text-xs mb-2 font-semibold">
              Profile picture
            </h1>
            {profileInfo && (
              <img
                src={profileInfo.avatar.high}
                alt={profileInfo.name}
                className="rounded-lg w-20 h-20 object-cover"
              />
            )}
          </div>

          <div className="flex flex-col justify-center items-left font-nunito font-normal">
            <p className="mb-2">
              Your <strong>Name</strong>
            </p>
            {profileInfo && (
              <p className="bg-bgInput p-4 rounded-lg mb-5">
                {profileInfo.name}
              </p>
            )}

            <p className="mb-2">
              Your <strong>E-mail</strong>
            </p>
            {profileInfo && (
              <p className="bg-bgInput p-4 rounded-lg">{profileInfo.email}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Profile };

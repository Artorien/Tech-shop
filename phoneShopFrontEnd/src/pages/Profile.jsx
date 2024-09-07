import SpecialHeader from "../components/Common-components/SpecialHeader";

function Profile(properties) {
  return (
    <>
      <SpecialHeader></SpecialHeader>
      <div>
        <h1>Hello, {properties.name}</h1>
      </div>
    </>
  );
}

export default Profile;

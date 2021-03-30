import useUserData from "./customHookExample";

function HookUseExample() {
  const userOb = useUserData();
  return (
    <div>
      <h1>Custom hook example</h1>
      UserName : {userOb.userName}
      <br />
      Name : {userOb.name}
      <br />
      Hobbies : {userOb.hobbies}
    </div>
  );
}
export default HookUseExample;

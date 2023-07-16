import '../Account/Account.css'

const Account = () => {
const name = localStorage.getItem("name");

return (
    <div className="div-account">
    <h1>Welcome, {name}!</h1>
    </div>
);
};

export default Account;

import { MailWarningIcon } from "lucide-react";
import Header from "../components/Common-components/Header";

function NotFound() {
  return (
    <>
      <Header></Header>
      <div className="notFound">
        <div className="prefix">
          <p>404</p>
        </div>
        <div className="error-text">
          <p>Not Found</p>
        </div>
      </div>
    </>
  );
}

export default NotFound;

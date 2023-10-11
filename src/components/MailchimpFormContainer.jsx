import MailchimpSubscribe from "react-mailchimp-subscribe";
import HPForm from "./HPForm";

const MailchimpFormContainer = () => {
    const postUrl = `https://feevale.us21.list-manage.com/subscribe/post?u=9bbecc9772ce0dfe24b3cc48c&id=92a2b4c670`;

    return (
            <MailchimpSubscribe
              url={postUrl}
              render={({ subscribe, status, message }) => (
                <HPForm
                    status={status} 
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
    );
};

export default MailchimpFormContainer;
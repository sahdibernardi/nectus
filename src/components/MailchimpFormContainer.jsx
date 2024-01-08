import MailchimpSubscribe from "react-mailchimp-subscribe";
import PropTypes from 'prop-types';
import HPForm from "./HPForm";
import ProfessionalForm from "./ProfessionalForm";

const MailchimpFormContainer = ({ type }) => {
    const postUrl = `https://feevale.us21.list-manage.com/subscribe/post?u=9bbecc9772ce0dfe24b3cc48c&id=92a2b4c670`;

    return (
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          type === 'professionals' ?
          <ProfessionalForm
            status={status} 
            message={message}
            onValidated={(formData) => subscribe(formData)}
          /> :
          <HPForm
            type={type}
            status={status} 
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    );
};

MailchimpFormContainer.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MailchimpFormContainer;
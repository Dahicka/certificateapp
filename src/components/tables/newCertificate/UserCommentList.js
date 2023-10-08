import { useTranslation } from "react-i18next";

const UserCommentList = (props) => {
  const { t } = useTranslation();
  return (
    <>
      {props.listOfComments
        ? props.listOfComments.map((data) => {
          return (
            <div style={{}}>
              <p style={{ display: "flex", marginLeft: "25px" }}>
                <b>{t("navigationBar.user")} </b>
                {data.user}
              </p>
              <p
                style={{
                  display: "flex",
                  marginLeft: "25px",
                  textAlign: "justify",
                }}
              >
                <b>{t("certificatePage.comment")}: </b>
                {data.comment}
              </p>
            </div>
          );
        })
        : null}
    </>
  );
};

export default UserCommentList;

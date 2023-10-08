import { useTranslation } from "react-i18next";

const UserCommentList = (props) => {
  const { t } = useTranslation();
  return (
    <>
      {props.listOfComments
        ? props.listOfComments.map((data) => {
          return (
            <div style={{}}>
              <p style={{ display: "flex", marginBottom: 0 }}>
                <b> {t("navigationBar.user")}</b> &nbsp;
                {data.user}
              </p>
              <p
                style={{
                  display: "flex",
                  marginTop: 0,
                  textAlign: "justify",
                }}
              >
                <b>{t("certificatePage.comment")}: </b> &nbsp;
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

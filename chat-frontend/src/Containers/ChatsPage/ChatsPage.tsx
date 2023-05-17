import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props: any) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId="70dd391f-5b77-45c3-99e6-325f980eb77d"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;

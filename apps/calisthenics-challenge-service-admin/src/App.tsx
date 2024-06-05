import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RequirementList } from "./requirement/RequirementList";
import { RequirementCreate } from "./requirement/RequirementCreate";
import { RequirementEdit } from "./requirement/RequirementEdit";
import { RequirementShow } from "./requirement/RequirementShow";
import { ChallengeList } from "./challenge/ChallengeList";
import { ChallengeCreate } from "./challenge/ChallengeCreate";
import { ChallengeEdit } from "./challenge/ChallengeEdit";
import { ChallengeShow } from "./challenge/ChallengeShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { DemonstrationList } from "./demonstration/DemonstrationList";
import { DemonstrationCreate } from "./demonstration/DemonstrationCreate";
import { DemonstrationEdit } from "./demonstration/DemonstrationEdit";
import { DemonstrationShow } from "./demonstration/DemonstrationShow";
import { ChallengeParticipationList } from "./challengeParticipation/ChallengeParticipationList";
import { ChallengeParticipationCreate } from "./challengeParticipation/ChallengeParticipationCreate";
import { ChallengeParticipationEdit } from "./challengeParticipation/ChallengeParticipationEdit";
import { ChallengeParticipationShow } from "./challengeParticipation/ChallengeParticipationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CalisthenicsChallengeService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Requirement"
          list={RequirementList}
          edit={RequirementEdit}
          create={RequirementCreate}
          show={RequirementShow}
        />
        <Resource
          name="Challenge"
          list={ChallengeList}
          edit={ChallengeEdit}
          create={ChallengeCreate}
          show={ChallengeShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
        <Resource
          name="Demonstration"
          list={DemonstrationList}
          edit={DemonstrationEdit}
          create={DemonstrationCreate}
          show={DemonstrationShow}
        />
        <Resource
          name="ChallengeParticipation"
          list={ChallengeParticipationList}
          edit={ChallengeParticipationEdit}
          create={ChallengeParticipationCreate}
          show={ChallengeParticipationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

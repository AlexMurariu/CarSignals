import { UserState } from "../../state/reducers/authReducer";

export interface GuideState {
    user: UserState,
    loadUserInProgress: boolean
}

export interface GuideDispatch {
    
}

export type GuideProps = GuideState & GuideDispatch;
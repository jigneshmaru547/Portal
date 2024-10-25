import * as React from 'react';
import styles from './LeavePortal.module.scss';
import { ILeavePortalProps } from './ILeavePortalProps';
import { Persona, PersonaSize } from '@fluentui/react/lib/Persona';

const LeavePortal: React.FunctionComponent<ILeavePortalProps> = (props: ILeavePortalProps) => {

  return (
    <div className={styles.maindiv}>
      <div className={styles.Header}>
        <img className={styles.headerlogo} src={props.logoUrl} />
        <div className={styles.companyName}>Leave Portal</div>
        <div>
          <Persona
            imageUrl={props.user.profilePictureUrl}
            text={props.userDisplayName}
            secondaryText={props.user.email}
            size={PersonaSize.size32}
            presence={1} />
        </div>
      </div>

    </div>
  )
}
export default LeavePortal;

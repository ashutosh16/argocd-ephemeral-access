import { RequestAccessBtnFlyout, RequestAccessBtn, ShowDeployBtn } from './access';
import DisplayAccessPermission from './component/access-panel';

const PERMISSION_TITLE = "Ephemeral Access";
const PERMISSION_ID = "ephemeral_access";
const DISPLAY_PERMISSION_TITLE = "Display_Ephemeral Access";
const DISPLAY_PERMISSION_ID = "display_ephemeral_access";




((window: any) => {
  window?.extensionsAPI?.registerStatusPanelExtension(
    DisplayAccessPermission,
    DISPLAY_PERMISSION_TITLE,
    DISPLAY_PERMISSION_ID
  )})(window);

((window: any) => {
  window?.extensionsAPI?.registerTopBarActionMenuExt(
    RequestAccessBtn,
    PERMISSION_TITLE,
    PERMISSION_ID,
    RequestAccessBtnFlyout,
    ShowDeployBtn,
    '',
    true
  )})(window);
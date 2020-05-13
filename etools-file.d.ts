/**
 `etools-file`

 This element will allow you to select and prepare the files you are gonna upload.
 The component doesn't upload the files, it just manages an array of them, which is reachable from the parent component.

 ### Styling

 You can use defined variables to change element style.

 Custom property | Description | Default
 ----------------|-------------|----------
 `--etools-file-secondary-text-color` | Secondary text color | `rgba(255, 255, 255, 0.54)`
 `--etools-file-main-btn-color` | Main buttons text color(upload and download buttons) | `#00acff`
 `--etools-file-delete-btn-color` | Delete button text color | `#f1572a`
 `--etools-file-single-file-wrapper` | Mixin applied to single file name wrapper | `{}`
 `--etools-file-filename-container` | Mixin applied to the filename container | `{}`
 `--etools-file-readonly-filename-container` | Mixin applied to the filename container(only if it's readonly) | `{}`
 `--etools-file-actions-multiple` | Mixin applied to file action buttons container if multiple is `true` | `{}`
 `--etools-file-actions-single` | Mixin applied to file action buttons container for single file selection | `{}`
 `--etools-file-error` | Mixin applied to the error message element | `{}`
 `--etools-file-type-underline-color` | File type underline color | `rgba(0, 0, 0, 0.12)`
 `--etools-file-area-with-type-border-color` | File area with type underline color | `rgba(0, 0, 0, 0.12)`
 `--etools-file-label` | File type underline color | `rgba(0, 0, 0, 0.12)`
 `--etools-file-area-with-type` | File area with type mixin | `{}`
 `--etools-file-upload-button-paper-btn` | Upload btn paper-button mixin | `{}`
 `--etools-file-upload-button` | Upload button mixin | `{}`
 */
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/neon-animation/neon-animations.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
declare const EtoolsFile_base: any;
/**
 * `etools-file`
 */
declare class EtoolsFile extends EtoolsFile_base {
    label: string
    files: object
    multiple: boolean
    disabled: boolean
    accept: string
    uploadLabel: string
    readonly: boolean
    invalid: boolean
    errorMessage: string
    noFileAttachedMsg: string
    fileModel: object
    useDeleteEvents: boolean
    activateFileTypes: boolean
    showUploadDate: boolean
    showUploadBtnAbove: boolean
    fileTypes: string[]
    fileTypesLabel: string
    hideDeleteBtn: boolean
    toastFitInto: object

}
export {EtoolsFile};

declare global {
    interface HTMLElementTagNameMap {
        "etools-file": EtoolsFile;
    }
}

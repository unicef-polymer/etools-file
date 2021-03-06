import {html} from '@polymer/polymer/polymer-element';
import '@polymer/iron-flex-layout/iron-flex-layout';


export const etoolsFilesStyle = html`

  <style>
  
    [hidden] {
      display: none !important;
    }

    :host {
      display: block;
      width: 100%;

      --paper-input-container-underline: {
        display: none;
      };
      --paper-input-container-underline-focus: {
        display: none;
      };
      --paper-input-container-underline-disabled: {
        display: none;
      };
      --paper-input-error: {
        @apply --etools-file-error;
      };
    }

    .files-container.multiple,
    .file-area,
    .upload-button-wrapper {
      @apply --layout-horizontal;
      @apply --layout-wrap;
    }

    .upload-button-wrapper span {
      display: inherit;
    }

    .file-area {
      position: relative;
    }

    .selected-file-container,
    .file-actions {
      display: inline-block;
    }

    .file-actions paper-button,
    .selected-file-container iron-icon,
    .file-name-wrapper,
    .selected-file-container,
    .file-actions {
      float: left;
    }

    .selected-file-container {
      width: calc(100% - 255px);
      max-width: calc(100% - 255px);
      min-width: 120px;
      margin-right: 15px;
      box-sizing: border-box;
    }

    :host(:not([readonly])) .selected-file-container {
      border-bottom: 1px solid var(--etools-file-secondary-text-color, #737373);
      @apply --etools-file-filename-container;
    }

    :host([readonly]) .selected-file-container {
      max-width: calc(100% - 145px);
      @apply --etools-file-readonly-filename-container;
    }

    .file-actions {
      @apply --layout-horizontal;
      width: 240px;
    }

    .files-container.multiple .file-actions {
      @apply --layout-flex;
      @apply --layout-end-justified;
      @apply --etools-file-actions-multiple;
    }

    .files-container:not(.multiple) .file-actions {
      @apply --etools-file-actions-single;
    }

    .files-container:not(.multiple) .file-name-wrapper {
      @apply --etools-file-single-file-wrapper;
    }

    .selected-file-container.only-selected {
      max-width: calc(100% - 160px);
      width: calc(100% - 160px);
    }

    .file-actions.only-selected {
      width: 145px;
    }

    :host([readonly]) .file-actions {
      width: 130px;
    }

    .file-name-wrapper {
      display: inline-block;
      width: 100%;
      line-height: 24px;
      height: 24px;
    }

    .file-name {
      display: inline-block;
      width: calc(100% - 32px);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 16px;
    }

    paper-button iron-icon,
    .file-icon {
      margin-right: 8px;
    }

    .upload-button {
      --paper-button: {
        @apply --layout-flex;
        @apply --layout-start-justified;
        font-weight: bold;
        font-size: 14px;
        margin: 0;
        padding: 0 5px 0 0;
        min-width: 150px !important; /*IE11 fix*/
        @apply --etools-file-upload-button-paper-btn;
      };
      --paper-button-ink-color: rgba(255, 255, 255, 0);
      @apply --etools-file-upload-button;
    }

    .change-button,
    .delete-button,
    .download-button {
      --paper-button: {
        @apply --layout-center-justified;
        font-weight: bold;
        font-size: 14px;
        padding: 0;
        margin: 0 15px 0 0;
        min-width: 0;
        width: auto;
      };
    }

    .delete-button {
      margin-right: 0;
    }

    .change-button,
    .file-icon {
      color: var(--etools-file-secondary-text-color, #737373);
    }

    :host(:not([readonly])) .upload-button,
    .download-button {
      color: var(--etools-file-main-btn-color, #00acff);
    }

    .delete-button {
      color: var(--etools-file-delete-btn-color, #f1572a);
    }

    .files-container.multiple .upload-button-wrapper {
      @apply --layout-vertical;
      @apply --layout-end-justified;
    }

    .files-container.multiple {
      @apply --layout-vertical;
    }

    .files-container.multiple .files-wrapper:not([hidden]) + .upload-button-wrapper .upload-button {
      margin-top: 15px;
    }

    .files-container.multiple .file-area + .file-area {
      margin-top: 6px;
    }

    :host([readonly]) .files-container.multiple .upload-button-wrapper {
      display: none;
    }

    .no-file-and-readonly {
      @apply --layout-vertical;
      @apply --layout-center-justified;
      height: 24px;
    }

    .type-dropdown paper-listbox {
      min-width: 200px;
    }

    .file-type-input-wrapper,
    .type-dropdown {
      width: 258px;
      float: left;
    }

    .file-type-input-wrapper .file-type-input {
      width: 100%;
    }

    .file-type-input,
    .type-dropdown {
      padding-left: 15px;
      border-left: 1px solid var(--etools-file-type-underline-color, rgba(0, 0, 0, 0.12));
      box-sizing: border-box;

      --paper-input-container-underline: {
        display: block !important;
        border-bottom: 1px solid var(--etools-file-type-underline-color, rgba(0, 0, 0, 0.12)) !important;
      };
      --paper-input-container-underline-focus: {
        display: block !important;
        border-bottom: 1px solid var(--etools-file-type-underline-color, rgba(0, 0, 0, 0.12)) !important;
      };
      --paper-input-container-underline-disabled: {
        display: block !important;
        border-bottom: 1px solid var(--etools-file-type-underline-color, rgba(0, 0, 0, 0.12)) !important;
      };
    }

    #element-label {
      @apply --etools-file-label;
    }
    
  </style>

`;

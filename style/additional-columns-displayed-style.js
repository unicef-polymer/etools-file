import {html} from '@polymer/polymer/polymer-element';
import '@polymer/iron-flex-layout/iron-flex-layout';


export const additionalColumnsDisplayedStyle = html`

  <style>
  
    :host([show-upload-btn-above]) .files-wrapper {
      order: 2;
    }

    :host([activate-file-types]) .file-name-wrapper,
    :host([show-upload-date]) .file-name-wrapper {
      width: calc(100% - 305px);
      padding-right: 15px;
      box-sizing: border-box;

    }

    :host([activate-file-types][show-upload-date]) .file-name-wrapper {
      width: calc(100% - 385px);
      padding-right: 15px;
      box-sizing: border-box;
    }

    :host([activate-file-types]) .file-name-wrapper,
    :host([show-upload-date]) .file-name-wrapper {
      @apply --layout-horizontal;
      @apply --layout-start-justified;
      @apply --layout-center;
      box-sizing: border-box;
      min-width: 140px;
      min-height: 62px;

    }

    :host([activate-file-types]) .selected-file-container {
      border-bottom: none;
    }

    :host([show-upload-date]) .selected-file-container {
      border-bottom: none;
    }

    :host([activate-file-types]) .file-area,
    :host([show-upload-date]) .file-area {
      border-bottom: 1px solid var(--etools-file-area-with-type-border-color, rgba(0, 0, 0, 0.12));
      padding: 15px;
      @apply --etools-file-area-with-type;
    }

    :host([activate-file-types][show-upload-btn-above]) .file-area {
      border-bottom: none;
      border-top: 1px solid var(--etools-file-area-with-type-border-color, rgba(0, 0, 0, 0.12));
      padding: 15px;
      @apply --etools-file-area-with-type;
    }

    :host([activate-file-types][show-upload-btn-above][readonly]) .file-area:first-of-type {
      border-bottom: none;
      border-top: none;
      padding: 15px;
      @apply --etools-file-area-with-type;
    }

    :host([show-upload-date][show-upload-btn-above]) .file-area {
      border-bottom: none;
      border-top: 1px solid var(--etools-file-area-with-type-border-color, rgba(0, 0, 0, 0.12));
      padding: 15px;
      @apply --etools-file-area-with-type;
    }

    :host([show-upload-date][show-upload-btn-above][readonly]) .file-area:first-of-type {
      border-bottom: none;
      border-top: none;
      padding: 15px;
      @apply --etools-file-area-with-type;
    }

    :host([show-upload-date]) .type-dropdown {
      border-left: none;
    }

    :host([show-upload-btn-above]) .upload-button {
      margin-top: 0px !important;
      margin-bottom: 25px !important;
    }

    .upload-date paper-input-container {
      --paper-input-container-label-floating: {
        color: var(--secondary-text-color, #737373);
      };
    }

    .upload-date {
      box-sizing: border-box;
      float: left;
      border-right: 1px solid var(--etools-file-type-underline-color, rgba(0, 0, 0, 0.12));
      padding-right: 15px;
      padding-bottom: 8px;
      margin-right: 15px;
      min-width: 95px;
      height: 62px;
    }

    /* responsive styles */
    @media screen and (max-width: 1365px) {
      :host .selected-file-container {
        @apply --layout-vertical;
      }

      :host .upload-date,
      :host .type-dropdown {
        border: none;
      }

      :host .upload-date,
      :host .type-dropdown,
      :host([activate-file-types][show-upload-date]) .file-name-wrapper {
        margin: 0;
        padding: 0;
      }

      :host([activate-file-types][show-upload-date]) .file-name-wrapper {
        width: 100%;
      }
    }
  </style>

`;

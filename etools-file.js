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


import {PolymerElement, html} from '@polymer/polymer';

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
// import './mixins/date-mixin.js';
import {etoolsFilesStyle} from './style/etools-file-style';
import {additionalColumnsDisplayedStyle} from './style/additional-columns-displayed-style';
import {DateMixin} from './mixins/date-mixin';

/**
 * @polymer
 * @customElement
 * @appliesMixin DateMixin
 * @demo demo/index.html
 */
export class EtoolsFile extends DateMixin(PolymerElement) {
  static get template() {
    // language=HTML
    return html`
        ${etoolsFilesStyle} ${additionalColumnsDisplayedStyle}
      <style>
        .toast-style {
          min-width: 330px;
        }
      </style>

      <paper-input-container always-float-label="" disabled$="[[disabled]]" invalid$="[[invalid]]">

        <label slot="label" id="element-label" hidden$="[[!_showLabel(label)]]" aria-hidden="true">[[label]]</label>
        <div slot="input">
          <div class$="files-container [[_getMultipleClass(multiple)]]">
            <div class="files-wrapper" hidden$="[[!showFilesContainer]]">
              <template is="dom-repeat" items="[[files]]" as="file">

                <div class="file-area">

                  <div class$="selected-file-container [[_getFileSelectedClass(file)]]">
                    <template is="dom-if" if="[[showUploadDate]]">
                      <div class="upload-date">
                        <paper-input-container always-float-label="">
                          <label slot="label">Upload Date</label>
                          <div slot="input" class="paper-input-input">
                            [[_formatUploadDate(file.created, file.id)]]
                          </div>
                        </paper-input-container>
                      </div>
                    </template>
                    <div class="file-name-wrapper">
                      <iron-icon class="file-icon" icon="attachment"></iron-icon>
                      <span class="file-name" title="[[file.file_name]]">[[file.file_name]]</span>
                    </div>
                    <template is="dom-if" if="[[_showReadonlyType(file.type, readonly)]]">
                      <div class="file-type-input-wrapper">
                        <paper-input class="file-type-input" label="[[fileTypesLabel]]"
                                     value="[[_getFileTypeStr(file.type)]]" placeholder="—" readonly=""></paper-input>
                      </div>
                    </template>
                    <template is="dom-if" if="[[_showFileType(fileTypes.length, readonly, file.type)]]">
                      <!-- types dropdown -->
                      <paper-dropdown-menu class="type-dropdown" label="[[fileTypesLabel]]" placeholder="—" noink="">
                        <paper-listbox id$="typeDropdown_[[index]]" slot="dropdown-content" attr-for-selected="name"
                                       on-iron-select="_typeChanged" on-iron-deselect="_typeChanged"
                                       selected="{{file.type}}">
                          <template is="dom-repeat" items="[[fileTypes]]" as="fileType">
                            <paper-item name$="[[fileType.id]]">[[fileType.name]]</paper-item>
                          </template>
                        </paper-listbox>
                      </paper-dropdown-menu>
                    </template>

                  </div>

                  <div class$="file-actions [[_getFileSelectedClass(file)]]">
                    <!-- download btn if file was uploaded -->
                    <paper-button class="download-button" disabled$="[[!_showDownloadBtn(file)]]"
                                  hidden$="[[!_showDownloadBtn(file)]]" on-tap="_downloadFile" title="Download">
                      <iron-icon icon="cloud-download"></iron-icon>
                      Download
                    </paper-button>

                    <paper-button class="change-button" on-tap="_changeFile" disabled$="[[readonly]]"
                                  hidden$="[[readonly]]">
                      Change
                    </paper-button>

                    <paper-button class="delete-button" on-tap="_deleteFile" disabled$="[[readonly]]"
                                  hidden$="[[_hideDeleteBtn(file, hideDeleteBtn, readonly, files)]]">
                      Delete
                    </paper-button>
                  </div>

                </div>
              </template>
            </div>

            <div class="upload-button-wrapper" hidden$="[[!_showUploadBtn(files.length, readonly)]]">
            <span>
              <paper-button class="upload-button" on-tap="_openFileChooser" title="[[uploadLabel]]"
                            disabled$="[[readonly]]">
              <iron-icon icon="file-upload"></iron-icon>
              [[uploadLabel]]
              </paper-button>
            </span>
            </div>
            <div class="no-file-and-readonly" hidden$="[[!_showNoFileAttachedMsg(files.length, readonly)]]">
              [[noFileAttachedMsg]]
            </div>
          </div>

          <input hidden="" class="paper-input-input" type="file" id="fileInput" on-change="_fileSelected"
                 multiple="[[multiple]]" accept="{{accept}}">

          <a id="downloader" hidden=""></a>
        </div>
        <template is="dom-if" if="[[invalid]]">
          <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
        </template>
      </paper-input-container>

      <paper-toast class="toast-style" id="fileAlreadySelectedToast" fit-into="[[toastFitInto]]"
                   always-on-top=""></paper-toast>
    `;
  }

  static get is() {
    return 'etools-file';
  }

  static get properties() {
    return {
      label: {
        type: String,
        value: 'File attachment'
      },
      files: {
        type: Object,
        value: function() {
          return [];
        },
        notify: true
      },
      multiple: {
        type: Boolean,
        value: false
      },
      disabled: {
        type: Boolean,
        value: false
      },
      accept: {
        type: String
      },
      uploadLabel: {
        type: String,
        value: 'Upload File'
      },
      readonly: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_readonlyChanged'
      },
      invalid: {
        type: Boolean,
        value: function() {
          return false;
        }
      },
      errorMessage: {
        type: String,
        value: function() {
          return '';
        }
      },
      noFileAttachedMsg: {
        type: String,
        value: 'No file attached'
      },
      fileModel: {
        type: Object,
        value: null
      },
      useDeleteEvents: {
        type: Boolean,
        value: function() {
          return false;
        }
      },
      activateFileTypes: {
        type: Boolean,
        value: function() {
          return false;
        },
        reflectToAttribute: true
      },
      showUploadDate: {
        type: Boolean,
        value: function() {
          return false;
        },
        reflectToAttribute: true
      },
      showUploadBtnAbove: {
        type: Boolean,
        value: function() {
          return false;
        },
        reflectToAttribute: true
      },
      fileTypes: {
        type: Array,
        value: []
      },
      fileTypesLabel: {
        type: String,
        value: 'File Type'
      },
      hideDeleteBtn: {
        type: Boolean,
        reflectToAttribute: true
      },
      toastFitInto: Object,
      showFilesContainer: Boolean
    };
  }

  static get observers() {
    return [
      '_filesChange(files.*)'
    ];
  }

  ready() {
    super.ready();
    if (this.multiple && this.label === 'File attachment') {
      this.set('label', this.label + '(s)');
    }
    if (!Array.isArray(this.files)) {
      this.files = [];
    }
  }

  _formatUploadDate(uploadDate, fileId) {
    if (!fileId) {
      return this.prettyDate(new Date(Date.now()));
    }
    if (!uploadDate) {
      return '-';
    }
    return this.prettyDate(uploadDate);
  }

  _readonlyChanged(newValue) {
    if (newValue !== undefined) {
      this.set('hideDeleteBtn', newValue);
    }
  }

  _hideDeleteBtn(file) {
    if (this.readonly) {
      return true;
    }
    if (!this.multiple && (!this.files || !this.files.length)) {
      // reset necessary because data binding doesn't seem to work in all expected cases
      this.set('hideDeleteBtn', false);
      return false;
    }
    if (this.multiple && this.hideDeleteBtn) {
      return this._showDownloadBtn(file);
    }
    return this.hideDeleteBtn;
  }

  _showFileType(fileTypesLength, readonly, fileType) {
    return this.activateFileTypes && fileTypesLength > 0 && !readonly;
  }

  _showReadonlyType(fileType, readonly) {
    return this.activateFileTypes && readonly;
  }

  _getFileTypeStr(fileType) {
    if (!this.fileTypes.length || !fileType) {
      return null;
    }
    let type = this._findInAvailableFileTypes(fileType);
    if (type) {
      return type.name;
    }
    return null;
  }

  _findInAvailableFileTypes(fileType) {
    let type = this.fileTypes.filter(function(type) {
      return parseInt(type.id, 10) === parseInt(fileType, 10);
    });
    if (type && type.length) {
      return type[0];
    }
    return null;
  }

  _showLabel(label) {
    return typeof label === 'string' && label !== '';
  }

  _showUploadBtn(filesLength, readonly) {
    if (!this.multiple && filesLength > 0) {
      return false;
    }

    return !(filesLength === 0 && readonly === true);
  }

  _showNoFileAttachedMsg(filesLength, readonly) {
    return filesLength === 0 && readonly === true;
  }

  _showDownloadBtn(file) {
    return file && typeof file.path === 'string' && file.path !== '';
  }

  _getFileSelectedClass(file) {
    return !this._showDownloadBtn(file) ? 'only-selected' : '';
  }

  _openFileChooser() {
    let elem = this.$.fileInput;
    if (elem && document.createEvent) {
      let evt = document.createEvent('MouseEvents');
      evt.initEvent('click', true, false);
      elem.dispatchEvent(evt);
    }
  }

  _typeChanged(event) {
    // var typeVal = event.target.selected;
    // console.log(event.model.index, typeVal);
    return;
  }

  _replaceFile(newFile) {
    if (this.changeFileIndex >= 0 && newFile) {
      this.$.fileInput.setAttribute('multiple', this.multiple);
      // this.set('disabled', false);
      if (this.files[this.changeFileIndex]) {
        if (this.multiple) {
          // check for already selected
          let fileAlreadySelected = this._checkFileAlreadySelected(newFile);
          if (fileAlreadySelected.length > 0) {
            this._displayAlreadySelectedWarning(fileAlreadySelected);
            this.changeFileIndex = -1;
            // reset file input
            this.$.fileInput.value = null;
            return;
          }
        }
        let oldFile = this.files[this.changeFileIndex];
        let newFileObj = JSON.parse(JSON.stringify(oldFile));
        newFileObj.file_name = newFile.name;
        newFileObj.raw = newFile;
        newFileObj.path = null;
        this.set('files.' + this.changeFileIndex, newFileObj);
      }
      this.changeFileIndex = -1;
      // reset file input
      this.$.fileInput.value = null;
      return true;
    }
    this.changeFileIndex = -1;
    return false;
  }

  _addMultipleFiles(files) {
    let filesAlreadySelected = [];
    for (let i = 0; i < files.length; i++) {
      let fileAlreadySelected = this._checkFileAlreadySelected(files[i]);
      if (fileAlreadySelected.length === 0) {
        let fileObj = this._getFileModel();
        fileObj.file_name = files[i].name;
        fileObj.raw = files[i];
        if (this.showUploadBtnAbove) {
          this.unshift('files', fileObj);
        } else {
          this.push('files', fileObj);
        }
      } else {
        filesAlreadySelected.push(fileAlreadySelected[0]);
      }
    }
    if (filesAlreadySelected.length > 0) {
      this._displayAlreadySelectedWarning(filesAlreadySelected);
    }
  }

  _checkFileAlreadySelected(file) {
    let fileAlreadySelected = this.files.filter(function(f) {
      return f.file_name === file.name && (f.path === '' || f.path === null || typeof f.path === 'undefined');
    });
    return fileAlreadySelected;
  }

  _displayAlreadySelectedWarning(filesAlreadySelected) {
    // show a warning with the already selected files
    let toastWarningMessage = '<p><strong>The following files are already selected:</strong><p>';
    filesAlreadySelected.forEach(function(alreadySelectedFile) {
      toastWarningMessage += '<p>' + alreadySelectedFile.file_name + '</p>';
    });
    this.$.fileAlreadySelectedToast.innerHTML = toastWarningMessage;
    this.$.fileAlreadySelectedToast.open();
  }

  _getFileModel() {
    if (this.fileModel) {
      return JSON.parse(JSON.stringify(this.fileModel));
    } else {
      return {
        id: null,
        file_name: null,
        path: null,
        raw: null
      };
    }
  }

  _addSingleFile(file) {
    if (file) {
      let fileObj = this._getFileModel();
      fileObj.file_name = file.name;
      fileObj.raw = file;

      if (this.files.length === 0) {
        // add file
        this.push('files', fileObj);
      } else {
        // replace/change file
        this.set('files.0', fileObj);
      }
    }
  }

  _fileSelected(e) {
    let files = e.target.files;
    // replace file if case
    if (this._replaceFile(files[0]) === true) {
      return;
    }

    // new files selected
    if (this.multiple) {
      this._addMultipleFiles(files);
    } else {
      // single file upload
      let file = e.target.files[0];
      this._addSingleFile(file);
    }
    // reset file input
    this.$.fileInput.value = null;
  }

  _changeFile(e) {
    if (e.model.index >= 0) {
      this.changeFileIndex = e.model.index;
      // this.set('disabled', true);
      this.$.fileInput.removeAttribute('multiple');
      this._openFileChooser();
    }
  }

  _deleteFile(e) {
    if (!this.multiple) {
      if (this.files.length > 0) {
        if (this.useDeleteEvents) {
          this.dispatchEvent(new CustomEvent('delete-file', {
            detail: {file: this.files[0], index: 0},
            bubbles: true,
            composed: true
          }));
        } else {
          this.set('files', []);
        }
        this.$.fileInput.value = null;
      }
    } else {
      if (typeof e.model.index === 'number' && e.model.index >= 0) {
        if (this.useDeleteEvents) {
          this.dispatchEvent(new CustomEvent('delete-file', {
            detail: {
              file: this.files[e.model.index],
              index: e.model.index
            }, bubbles: true, composed: true
          }));
        } else {
          this.splice('files', e.model.index, 1);
        }
      }
    }
  }

  _filesChange() {
    if (this.files instanceof Array && this.files.length > 0) {
      this.set('showFilesContainer', true);
    } else {
      this.set('showFilesContainer', false);
    }

    if (!this.multiple) {
      if (this.files instanceof Array && this.files.length > 1) {
        this.set('files', [this.files[0]]);
      }
    }
  }

  _downloadFile(e) {
    if (this.files.length > 0) {
      let file = this.files[0];
      if (this.multiple && this.files[e.model.index]) {
        file = this.files[e.model.index];
      }
      if (typeof file !== 'undefined' && file.path !== '') {
        let a = this.$.downloader;
        a.href = file.path;
        a.download = file.file_name;
        a.click();
        window.URL.revokeObjectURL(file.path);
      }
    }
  }

  _getMultipleClass(multiple) {
    return multiple ? 'multiple' : '';
  }
}

customElements.define(EtoolsFile.is, EtoolsFile);

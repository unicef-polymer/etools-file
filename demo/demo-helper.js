import {PolymerElement} from '@polymer/polymer';


/**
 * @customElement
 * @polymer
 *
 */
class DemoHelper extends (PolymerElement) {
  static get is() {
    return 'demo-helper';
  }

  static get properties() {
    return {
      fileData: {
        type: Array,
        value: [
          {
            id: 'pic1',
            file_name: 'cat.jpg',
            path: 'https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg'
          }
        ],
        notify: true
      },
      files: {
        type: Array,
        value: [
          {
            id: 'pic1',
            file_name: 'cat.jpg',
            path: 'https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg'
          },
          {
            id: 'pic2',
            file_name: 'cat2.jpg',
            path: 'https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg'
          }
        ],
        notify: true
      },
      singleFile: {
        type: Array,
        value: []
      },
      multipleFiles: {
        type: Array,
        value: []
      },
      singleFileData: {
        type: Array,
        value: [],
        notify: true
      },
      fileModel: {
        type: Object,
        value: {
          id: null,
          intervention: 4,
          type: null,
          upload_date: null
        },
        notify: true
      },
      multipleFileData: {
        type: Array,
        value: [],
        notify: true
      },
      fileTypes: {
        type: Array,
        value: [
          {
            id: null,
            name: 'None'
          },
          {
            "id": 3,
            "name": "Jason"
          },
          {
            "id": 4,
            "name": "Picture"
          },
          {
            "id": 5,
            "name": ".xls"
          },
          {
            "id": 6,
            "name": "FACE Forms"
          },
          {
            "id": 7,
            "name": "Programme Reports"
          },
          {
            "id": 8,
            "name": "Spot Check"
          }
        ],
        notify: true
      }
    };
  }

  ready() {
    super.ready();
    this.set('singleFileData', [
      {
        id: 1331,
        intervention: 4,
        type: 5,
        attachment: "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg",
        attachment_file: "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg",

        // prepared from attachment_file
        file_name: 'A nice cat',
        path: "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg"
      }
    ]);

    this.set('multipleFileData', [
      {
        id: 1331,
        intervention: 4,
        type: 8,
        attachment: "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg",
        attachment_file: "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg",
        upload_date: '2017-07-05',

        // prepared from attachment_file
        file_name: 'A nice cat 1',
        path: "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg"
      },
      {
        id: 234,
        intervention: 4,
        type: 7,
        attachment: "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg",
        attachment_file: "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg",
        upload_date: '2017-08-09',

        // prepared from attachment_file
        file_name: 'A nice cat 2',
        path: "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg"
      },
      {
        id: 541,
        intervention: 4,
        type: 4,
        attachment: "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg",
        attachment_file: "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg",
        upload_date: '2016-05-09',
        // prepared from attachment_file
        file_name: 'A nice cat 3',
        path: "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg"
      }
    ]);
  }

}

customElements.define(DemoHelper.is, DemoHelper);

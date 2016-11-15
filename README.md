# \<etools-file\>

This element will allow you to select and prepare the files you are gonna upload.
The component doesn't upload the files, it just manages an array of them, which is reachable from the parent component.

![alt tag](etools-file.png)

## Usage

### Examples
```html
<etools-file files="{{files}}" label="Single file selection" accept=".jpg"></etools-file>

<etools-file files="{{files}}" label="Single file selection" readonly></etools-file>

<etools-file files="{{multipleFiles}}" multiple></etools-file>

<etools-file files="{{multipleFiles}}" multiple readonly></etools-file>
```

Properties:
* accept, String - files types to accept for selection
* disabled, Boolean, default: false
* files, Array, default: [] – notifies
* label, String, default: 'File attachment'
* multiple, Boolean, default: false
* readonly, Boolean, default: false
* uploadLabel, String, default: 'Upload File'

## Styling

You can use defined variables to change main colors.

Custom property | Description | Default
 ----------------|-------------|----------
 `--etools-file-secondary-text-color` | Secondary text color | `rgba(255, 255, 255, 0.54)`
 `--etools-file-main-btn-color` | Main buttons text color(upload and download buttons) | `#00acff`
 `--etools-file-delete-btn-color` | Delete button text color | `#f1572a`


## Install
```bash
$ bower install --save etools-file
```

## Preview element locally

Install needed dependencies by running: `$ bower install`.
Make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `$ polymer serve` to serve your element application locally.

## Running Tests

You need to have `web-component-tester` installed (if not run `npm install -g web-component-tester`)
```bash
$ wtc
```
or 
```bash
$ wtc -p
```

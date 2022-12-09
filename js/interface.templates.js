this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.buttons"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group clearfix\">\r\n  <div class=\"checkbox checkbox-icon\">\r\n    <input type=\"checkbox\" id=\"show_submit\" v-model=\"showSubmit\">\r\n    <label for=\"show_submit\">\r\n      <span class=\"check\"><i class=\"fa fa-check\"></i></span> Show submit button\r\n    </label>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group\" :class=\"{ 'has-error': _fieldLabelError && !submitValue }\">\r\n  <label>Submit button label</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"submitValue\" placeholder=\"Submit button label\" />\r\n  <p class=\"help-block\" v-if=\"_fieldLabelError && !submitValue\" v-html=\"_fieldLabelError\"></p>\r\n</div>\r\n\r\n<div class=\"form-group clearfix\">\r\n  <div class=\"checkbox checkbox-icon\">\r\n    <input type=\"checkbox\" id=\"show_clear\" v-model=\"showClear\">\r\n    <label for=\"show_clear\">\r\n      <span class=\"check\"><i class=\"fa fa-check\"></i></span> Show clear button\r\n    </label>\r\n    <p class=\"help-block\">The clear button will reset all fields to their defaults.</p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group\" :class=\"{ 'has-error': _fieldLabelError && !clearValue }\">\r\n  <label>Clear button label</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"clearValue\" placeholder=\"Clear button label\" />\r\n  <p class=\"help-block\" v-if=\"_fieldLabelError && !clearValue\" v-html=\"_fieldLabelError\"></p>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.checkbox"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div v-show=\"defaultValueSource === 'default'\" class=\"form-group\">\r\n  <label>Default values <small>(One per line)</small></label>\r\n  <textarea class=\"form-control\" v-model.trim=\"defaultValue\" placeholder=\"Default values\" />\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.date"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group\">\r\n  <div>\r\n    <label class=\"control-label\">Default</label>\r\n  </div>\r\n  <div>\r\n    <div class=\"radio radio-icon\">\r\n      <input type=\"radio\" id=\"default\" name=\"default\" value='default' v-model=\"autofill\">\r\n      <label for=\"default\">\r\n        <span class=\"check\"><i class=\"fa fa-circle\"></i></span>Autofill with current date if it's empty\r\n      </label>\r\n    </div>\r\n    <div class=\"radio radio-icon\">\r\n      <input type=\"radio\" id=\"always\" name=\"always\" value='always' v-model=\"autofill\">\r\n      <label for=\"always\">\r\n        <span class=\"check\"><i class=\"fa fa-circle\"></i></span>Always autofill with current date\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div v-if=\"isApplyCurrentDateField\" class=\"form-group\">\r\n  <div>\r\n    <label class=\"control-label\">When applying the current date</label>\r\n  </div>\r\n  <div>\r\n    <div class=\"radio radio-icon\">\r\n      <input type=\"radio\" id=\"load\" name=\"load\" value='load' v-model=\"defaultSource\">\r\n      <label for=\"load\">\r\n        <span class=\"check\"><i class=\"fa fa-circle\"></i></span>Use the date when form is loaded\r\n      </label>\r\n    </div>\r\n    <div class=\"radio radio-icon\">\r\n      <input type=\"radio\" id=\"submission\" name=\"submission\" value='submission' v-model=\"defaultSource\">\r\n      <label for=\"submission\">\r\n        <span class=\"check\"><i class=\"fa fa-circle\"></i></span>Use the date when form is submitted\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.email"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div v-show=\"defaultValueSource === 'default'\" class=\"form-group\">\r\n  <label>Default value</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"value\" placeholder=\"Default value\" />\r\n</div>\r\n<div class=\"form-group\">\r\n  <label>Placeholder</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"placeholder\" placeholder=\"Placeholder text\" />\r\n</div>\r\n\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.file"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group\">\r\n  <label class=\"selectLabel\">Select the folder where the files are stored.</label>\r\n  <div class=\"btn btn-primary\" id=\"select_folder\" v-model=\"mediaFolderId\" v-on:click=\"openFilePicker\">\r\n    <template v-if=\"mediaFolderId\">Replace folder</template>\r\n    <template v-else>Select a folder</template>\r\n  </div>\r\n  <div v-if=\"mediaFolderId\" class=\"selected-folder-holder\">\r\n    <i class=\"fa fa-folder\"></i> Selected folder: <strong>{{ mediaFolderData.name }}</strong> - <a href=\"#\" v-on:click.prevent=\"openFileManager\">See files</a>\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.form-result"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Thank you for submitting the form!</h2>\r\n<hr />\r\n<a href=\"#\" class=\"btn btn-primary\" v-on:click=\"start($event)\">Start over</a>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.form"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"col-xs-12 form-group\">\r\n      <div class=\"checkbox checkbox-icon\">\r\n        <input type=\"checkbox\" id=\"select-all\" v-model=\"addSelectAll\">\r\n        <label for=\"select-all\">\r\n          <span class=\"check\"><i class=\"fa fa-check\"></i></span>Include Select All\r\n        </label>\r\n      </div>\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"form-group cleafix\">\r\n        <div class=\"col-xs-12\">\r\n          <label class=\"control-label\">Options <small>(One per line)</small></label>\r\n        </div>\r\n        <div class=\"col-xs-12\">\r\n          <textarea v-on:input=\"_setOptions($event.target.value)\" class=\"form-control\">{{ _options }}</textarea>\r\n        </div>\r\n      </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"form-group cleafix\">\r\n      <div class=\"col-xs-12\">\r\n        <label>Minimum value number</label>\r\n        <input class=\"form-control\" type=\"number\" v-model.trim=\"min\" placeholder=\"Default: 0\"/>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group cleafix\">\r\n      <div class=\"col-xs-12\">\r\n        <label>Maximum value number</label>\r\n        <input class=\"form-control\" type=\"number\" v-model.trim=\"max\" placeholder=\"Default: 100\"/>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group cleafix\">\r\n      <div class=\"col-xs-12\">\r\n        <label>Number of steps</label>\r\n        <input class=\"form-control\" type=\"number\" v-model.trim=\"step\" placeholder=\"Default: 1\"/>\r\n      </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "<form v-on:submit.prevent=\"onSubmit\" class=\"form-horizontal\">\r\n  <div class=\"form-fields-holder\">\r\n    <div v-if=\"_isFormField\">\r\n      <div class=\"form-group cleafix\" :class=\"{ 'has-error': _fieldLabelError }\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">\r\n              <label class=\"control-label\" for=\"field-label\">Field label</label>\r\n            </div>\r\n            <div class=\"col-xs-12\">\r\n              <input class=\"form-control\" @input=\"matchFields\" id=\"field-label\" type=\"text\" v-model.trim=\"label\" placeholder=\"Field description\" />\r\n              <p class=\"help-block\" v-if=\"_fieldLabelError\" v-html=\"_fieldLabelError\"></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group cleafix\" :class=\"{ 'has-error': _fieldNameError }\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\" v-if=\"_showNameField\">\r\n              <label class=\"control-label\" for=\"field-name\">Field name</label>\r\n            </div>\r\n            <div class=\"col-xs-12 text-right\" v-if=\"!_showNameField\">\r\n              <span class=\"btn-link form-fields-customize\" @click=\"disableAutomatch\">Set the field's name <i class=\"text-muted fa fa-question-circle\" ref=\"tooltip\" data-viewport=\".modal-body\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Customize a different field name for the data source\"></i></span>\r\n            </div>\r\n            <div class=\"col-xs-7 col-xs-7 text-right\" v-else>\r\n              <span class=\"btn-link form-fields-customize\" @click=\"enableAutomatch\">Match the field's name and label</span>\r\n            </div>\r\n            <div class=\"col-xs-12\" v-if=\"_showNameField\">\r\n              <input id=\"field-name\" class=\"form-control\" type=\"text\" v-model.trim=\"name\" placeholder=\"Field name\" />\r\n              <p class=\"help-block\" v-if=\"_fieldNameError\" v-html=\"_fieldNameError\"></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group cleafix\" v-if=\"_supportsRequired\">\r\n        <div class=\"col-xs-12\">\r\n          <label class=\"control-label\">Is this field required?</label>\r\n        </div>\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"radio radio-icon\">\r\n            <input type=\"radio\" id=\"required-yes\" name=\"required-option\" v-bind:value=\"true\" v-model=\"required\" v-on:input=\"isHidden = false\">\r\n            <label for=\"required-yes\">\r\n              <span class=\"check\"><i class=\"fa fa-circle\"></i></span> <strong>Yes</strong> - Users will have to fill in the field\r\n            </label>\r\n          </div>\r\n          <div class=\"radio radio-icon\">\r\n            <input type=\"radio\" id=\"required-no\" name=\"required-option\" v-bind:value=\"false\" v-model=\"required\">\r\n            <label for=\"required-no\">\r\n              <span class=\"check\"><i class=\"fa fa-circle\"></i></span> <strong>No</strong> - The field is optional\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group-cleafix\">\r\n        <div class=\"checkbox checkbox-icon form-hide-checkbox\">\r\n          <input type=\"checkbox\" :name=\"name\" v-model=\"isHidden\" id=\"form-hide-checkbox\" v-on:input=\"required = false\">\r\n          <label for=\"form-hide-checkbox\">\r\n            <span class=\"check\"><i class=\"fa fa-check\"></i></span>\r\n            <span class=\"hide-field\">Hide this field from users.</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n";
  stack1 = ((helper = (helper = helpers.hasSelectAll || (depth0 != null ? depth0.hasSelectAll : depth0)) != null ? helper : alias2),(options={"name":"hasSelectAll","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.hasSelectAll) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = ((helper = (helper = helpers.hasOptions || (depth0 != null ? depth0.hasOptions : depth0)) != null ? helper : alias2),(options={"name":"hasOptions","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.hasOptions) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n     <div v-if=\"_componentsWithDescription.includes(_componentName)\" class=\"form-group cleafix\">\r\n       <div class=\"col-xs-12\">\r\n        <label>Description</label>\r\n        <input class=\"form-control\" type=\"text\" v-model.trim=\"description\" placeholder=\"Description text\" />\r\n      </div>\r\n    </div>\r\n\r\n";
  stack1 = ((helper = (helper = helpers.isSlider || (depth0 != null ? depth0.isSlider : depth0)) != null ? helper : alias2),(options={"name":"isSlider","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.isSlider) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n    <div v-if=\"_componentsWithPersonalization.includes(_componentName)\" class=\"form-group cleafix\">\r\n      <div class=\"col-xs-12\">\r\n        <label>Default value type</label>\r\n        <select class=\"form-control\" :value=\"defaultValueSource\" v-model=\"defaultValueSource\">\r\n          <option value=\"default\">Enter a value</option>\r\n          <option value=\"profile\">User profile data</option>\r\n          <option value=\"appStorage\">App storage variable</option>\r\n          <option value=\"query\">Link query parameter</option>\r\n        </select>\r\n        <div class=\"col-xs-12 text-right\">\r\n          <a href=\"https://help.fliplet.com/form-component/\" target=\"_blank\">Learn more about these types</a>\r\n        </div>\r\n        <div v-if=\"defaultValueSource !== 'default'\">\r\n          <label>Default key</label>\r\n          <div v-if=\"!defaultValueKey\" class=\"text-danger\">\r\n            This field is required*\r\n          </div>\r\n          <input v-bind:class=\"{ 'border-danger': !defaultValueKey }\" v-if=\"defaultValueSource === 'profile'\"class=\"form-control\" type=\"text\" v-model.trim=\"defaultValueKey\" placeholder=\"Enter user data field/column name\" />\r\n          <input v-bind:class=\"{ 'border-danger': !defaultValueKey }\" v-else-if=\"defaultValueSource === 'appStorage'\"class=\"form-control\" type=\"text\" v-model.trim=\"defaultValueKey\" placeholder=\"Enter storage key\" />\r\n          <input v-bind:class=\"{ 'border-danger': !defaultValueKey }\" v-else-if=\"defaultValueSource === 'query'\"class=\"form-control\" type=\"text\" v-model.trim=\"defaultValueKey\" placeholder=\" Enter query name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12\">\r\n      "
    + ((stack1 = ((helper = (helper = helpers.template || (depth0 != null ? depth0.template : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"template","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    </div>\r\n\r\n    <div v-if='_readOnlyComponents.includes(_componentName)' class=\"col-xs-12 form-group\">\r\n      <div class=\"checkbox checkbox-icon\">\r\n        <input type=\"checkbox\" id=\"readonly\" name=\"readonly\" v-model=\"readonly\">\r\n        <label for=\"readonly\">\r\n          <span class=\"check\"><i class=\"fa fa-check\"></i></span> Read only and cannot be edited\r\n        </label>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"footer\">\r\n    <button type=\"submit\" class=\"btn btn-primary\" :class=\"{ disabled: _fieldNameError || _fieldLabelError }\">Save</button>\r\n  </div>\r\n</form>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.horizontalRule"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.image"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group\">\r\n  <label>Set a maximum width for uploaded images</label>\r\n  <input class=\"form-control\" type=\"number\" v-model.trim=\"customWidth\" />\r\n</div>\r\n<div class=\"form-group\">\r\n  <label>Set a maximum height for uploaded images</label>\r\n  <input class=\"form-control\" type=\"number\" v-model.trim=\"customHeight\" />\r\n</div>\r\n<div class=\"form-group\">\r\n  <label class=\"selectLabel\">Select the folder where the images are stored.</label>\r\n  <div class=\"btn btn-primary\" id=\"select_folder\" v-model=\"mediaFolderId\" v-on:click=\"openFilePicker\">\r\n    <template v-if=\"mediaFolderId\">Replace folder</template>\r\n    <template v-else>Select a folder</template>\r\n  </div>\r\n    <div v-if=\"mediaFolderId\" class=\"selected-folder-holder\">\r\n      <i class=\"fa fa-folder\"></i> Selected folder: <strong>{{ mediaFolderData.name }}</strong> - <a href=\"#\" v-on:click.prevent=\"openFileManager\">See files</a>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.input"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div v-show=\"defaultValueSource === 'default'\" class=\"form-group\">\r\n  <label>Default value</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"value\" placeholder=\"Default value\" />\r\n</div>\r\n<div class=\"form-group\">\r\n  <label>Placeholder</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"placeholder\" placeholder=\"Placeholder text\" />\r\n</div>\r\n<div class=\"form-group\">\r\n  <div class=\"checkbox checkbox-icon\">\r\n    <input type=\"checkbox\" id=\"generate-guid\" v-model=\"generateGuid\">\r\n    <label for=\"generate-guid\">\r\n      <span class=\"check\"><i class=\"fa fa-check\"></i></span> Have this form field act as an ID generator\r\n    </label>\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.number"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div v-show=\"defaultValueSource === 'default'\" class=\"form-group\">\r\n  <label>Default value</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"value\" placeholder=\"Default value\" />\r\n</div>\r\n<div class=\"form-group\">\r\n  <label>Placeholder</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"placeholder\" placeholder=\"Placeholder text\" />\r\n</div>\r\n<div class=\"form-group\">\r\n  <label class=\"control-label\">What numbers should be allowed?</label>\r\n  <div class=\"radio radio-icon\">\r\n    <input type=\"radio\" id=\"numbers-all\" name=\"numbers-option\" v-bind:value=\"false\" v-model=\"positiveOnly\">\r\n    <label for=\"numbers-all\">\r\n      <span class=\"check\"><i class=\"fa fa-circle\"></i></span> Allow all numbers\r\n    </label>\r\n  </div>\r\n  <div class=\"radio radio-icon\">\r\n    <input type=\"radio\" id=\"numbers-natural\" name=\"numbers-option\" v-bind:value=\"true\" v-model=\"positiveOnly\">\r\n    <label for=\"numbers-natural\">\r\n      <span class=\"check\"><i class=\"fa fa-circle\"></i></span> Positive numbers only\r\n    </label>\r\n  </div>\r\n</div>\r\n<div class=\"form-group\">\r\n  <label>Decimal places allowed</label>\r\n  <input class=\"form-control\" type=\"number\" min=\"0\" max=\"10\" step=\"1\" v-model.number=\"decimals\" placeholder=\"0\" />\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.paragraph"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group\">\r\n  <label>Text</label>\r\n  <textarea class=\"form-control\" v-model.trim=\"value\" placeholder=\"Type some text\" rows=\"6\"></textarea>\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.password"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group\">\r\n  <label>Description</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"description\" placeholder=\"Description text\" />\r\n</div>\r\n<div class=\"form-group\">\r\n  <label>Placeholder</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"placeholder\" placeholder=\"Placeholder text\" />\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label>Should the password be encrypted?</label>\r\n  <div class=\"radio radio-icon\">\r\n    <input type=\"radio\" id=\"hash-yes\" name=\"hash-option\" v-bind:value=\"true\" v-model=\"hash\">\r\n    <label for=\"hash-yes\">\r\n      <span class=\"check\"><i class=\"fa fa-circle\"></i></span> <strong>Yes</strong> - Encrypt the password before storing\r\n    </label>\r\n  </div>\r\n  <div class=\"radio radio-icon\">\r\n    <input type=\"radio\" id=\"hash-no\" name=\"hash-option\" v-bind:value=\"false\" v-model=\"hash\">\r\n    <label for=\"hash-no\">\r\n      <span class=\"check\"><i class=\"fa fa-circle\"></i></span> <strong>No</strong> - Store the password as plain text\r\n    </label>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label>Should a password be automatically generated when submitting a new entry?</label>\r\n  <div class=\"radio radio-icon\">\r\n    <input type=\"radio\" id=\"autogenerate-yes\" name=\"autogenerate-option\" v-bind:value=\"true\" v-model=\"autogenerate\">\r\n    <label for=\"autogenerate-yes\">\r\n      <span class=\"check\"><i class=\"fa fa-circle\"></i></span> <strong>Yes</strong> - a secure password will be randomly generated\r\n    </label>\r\n  </div>\r\n  <div class=\"radio radio-icon\">\r\n    <input type=\"radio\" id=\"autogenerate-no\" name=\"autogenerate-option\" v-bind:value=\"false\" v-model=\"autogenerate\">\r\n    <label for=\"autogenerate-no\">\r\n      <span class=\"check\"><i class=\"fa fa-circle\"></i></span> <strong>No</strong> - The user will manually enter a password\r\n    </label>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group\" v-if=\"autogenerate\">\r\n  <label>Autogenerated password length</label>\r\n  <input class=\"form-control\" type=\"number\" v-model=\"autogenerateLength\" v-on:change=\"validatePasswordLength\" placeholder=\"Password length\" min=\"8\" max=\"32\" step=\"1\" :required=\"autogenerate\" />\r\n  <p class=\"help-block\">Must be at least 8 characters</p>\r\n</div>\r\n\r\n<div class=\"form-group\" v-if=\"!autogenerate\">\r\n  <label>Ask users to confirm the password before submitting?</label>\r\n  <div class=\"radio radio-icon\">\r\n    <input type=\"radio\" id=\"confirm-yes\" name=\"confirm-option\" v-bind:value=\"true\" v-model=\"confirm\">\r\n    <label for=\"confirm-yes\">\r\n      <span class=\"check\"><i class=\"fa fa-circle\"></i></span> <strong>Yes</strong> - Add a password confirmation field\r\n    </label>\r\n  </div>\r\n  <div class=\"radio radio-icon\">\r\n    <input type=\"radio\" id=\"confirm-no\" name=\"confirm-option\" v-bind:value=\"false\" v-model=\"confirm\">\r\n    <label for=\"confirm-no\">\r\n      <span class=\"check\"><i class=\"fa fa-circle\"></i></span> <strong>No</strong> - Don't add anything else\r\n    </label>\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.select"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div v-show=\"defaultValueSource === 'default'\" class=\"form-group\">\r\n  <label>Default value <small>(Enter one of the options you entered above)</small></label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"value\" placeholder=\"Default value\" />\r\n</div>\r\n<div class=\"form-group\">\r\n  <label>Option placeholder</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"placeholder\" placeholder=\"Option placeholder\" />\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.signature"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group\">\r\n  <label>Height (px)</label>\r\n  <input class=\"form-control\" type=\"number\" v-model.trim=\"height\" placeholder=\"e.g. 150\" />\r\n</div>\r\n<div class=\"form-group\">\r\n  <label class=\"selectLabel\">Select the folder where the images are stored.</label>\r\n  <div class=\"btn btn-primary\" id=\"select_folder\" v-model=\"mediaFolderId\" v-on:click=\"openFilePicker\">\r\n    <template v-if=\"mediaFolderId\">Replace folder</template>\r\n    <template v-else>Select a folder</template>\r\n  </div>\r\n    <div v-if=\"mediaFolderId\" class=\"selected-folder-holder\">\r\n      <i class=\"fa fa-folder\"></i> Selected folder: <strong>{{ mediaFolderData.name }}</strong> - <a href=\"#\" v-on:click.prevent=\"openFileManager\">See files</a>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.slider"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div v-show=\"defaultValueSource === 'default'\" class=\"form-group\">\r\n  <label>Default value</label>\r\n  <input class=\"form-control\" v-model.trim=\"value\" placeholder=\"Default value\" />\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.starRating"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group\">\r\n  <label for=\"default-value\">Default value</label>\r\n  <select v-model.trim=\"value\" id=\"default-value\" class=\"form-control\">\r\n    <option value=\"\">Select one</option>\r\n    <option value=\"1\">1</option>\r\n    <option value=\"2\">2</option>\r\n    <option value=\"3\">3</option>\r\n    <option value=\"4\">4</option>\r\n    <option value=\"5\">5</option>\r\n  </select>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.telephone"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div v-show=\"defaultValueSource === 'default'\" class=\"form-group\">\r\n  <label>Default value</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"value\" placeholder=\"Default value\" />\r\n</div>\r\n<div class=\"form-group\">\r\n  <label>Placeholder</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"placeholder\" placeholder=\"Placeholder text\" />\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.textarea"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div v-show=\"defaultValueSource === 'default'\" class=\"form-group\">\r\n  <label>Default value</label>\r\n  <textarea class=\"form-control\" v-model.trim=\"value\" placeholder=\"Default value\"></textarea>\r\n</div>\r\n<div class=\"form-group\">\r\n  <label>Placeholder</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"placeholder\" placeholder=\"Placeholder\" />\r\n</div>\r\n<div class=\"form-group\">\r\n  <label>Rows <small>(Specifies the height of the text area in lines)</small></label>\r\n  <label for=\"textarea-rows\" class=\"select-proxy-display\">\r\n    <span class=\"icon fa fa-chevron-down\"></span>\r\n    <span class=\"select-value-proxy\">2</span>\r\n    <select class=\"form-control hidden-select\" id=\"textarea-rows\" v-model=\"rows\">\r\n      <option :value=\"number\" v-for=\"number in [1,2,3,4,5,6,7,8,9]\">{{ number }}</option>\r\n    </select>\r\n  </label>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.time"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group\">\r\n  <div>\r\n    <label class=\"control-label\">Default</label>\r\n  </div>\r\n  <div>\r\n    <div class=\"radio radio-icon\">\r\n      <input type=\"radio\" id=\"default\" name=\"default\" value='default' v-model=\"autofill\">\r\n      <label for=\"default\">\r\n        <span class=\"check\"><i class=\"fa fa-circle\"></i></span>Autofill with current time if it's empty\r\n      </label>\r\n    </div>\r\n    <div class=\"radio radio-icon\">\r\n      <input type=\"radio\" id=\"always\" name=\"always\" value='always' v-model=\"autofill\">\r\n      <label for=\"always\">\r\n        <span class=\"check\"><i class=\"fa fa-circle\"></i></span>Always autofill with current time\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div v-if=\"isApplyCurrentDateField\" class=\"form-group\">\r\n  <div>\r\n    <label class=\"control-label\">When applying the current time</label>\r\n  </div>\r\n  <div>\r\n    <div class=\"radio radio-icon\">\r\n      <input type=\"radio\" id=\"load\" name=\"load\" value='load' v-model=\"defaultSource\">\r\n      <label for=\"load\">\r\n        <span class=\"check\"><i class=\"fa fa-circle\"></i></span>Use the time when form is loaded\r\n      </label>\r\n    </div>\r\n    <div class=\"radio radio-icon\">\r\n      <input type=\"radio\" id=\"submission\" name=\"submission\" value='submission' v-model=\"defaultSource\">\r\n      <label for=\"submission\">\r\n        <span class=\"check\"><i class=\"fa fa-circle\"></i></span>Use the time when form is submitted\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.title"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-group\">\r\n  <label>Title text</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"value\" placeholder=\"Type some text\" />\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.url"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div v-show=\"defaultValueSource === 'default'\" class=\"form-group\">\r\n  <label>Default value</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"value\" placeholder=\"Default value\" />\r\n</div>\r\n<div class=\"form-group\">\r\n  <label>Placeholder</label>\r\n  <input class=\"form-control\" type=\"text\" v-model.trim=\"placeholder\" placeholder=\"Placeholder text\" />\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.configurations.wysiwyg"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div v-show=\"defaultValueSource === 'default'\" class=\"form-group\">\r\n  <label>Default value</label>\r\n  <textarea class=\"form-control\" v-model.trim=\"value\" placeholder=\"Default value\"></textarea>\r\n</div>\r\n<div class=\"form-group\">\r\n  <label>Rows <small>(Specifies the height of the text area in lines)</small></label>\r\n  <label for=\"textarea-rows\" class=\"select-proxy-display\">\r\n    <span class=\"icon fa fa-chevron-down\"></span>\r\n    <span class=\"select-value-proxy\">2</span>\r\n    <select class=\"form-control hidden-select\" id=\"textarea-rows\" v-model=\"rows\">\r\n      <option :value=\"number\" v-for=\"number in [1,2,3,4,5,6,7,8,9,10,15,20]\">{{ number }}</option>\r\n    </select>\r\n  </label>\r\n</div>\r\n<div class=\"form-group\">\r\n  <label>Placeholder</label>\r\n  <textarea class=\"form-control\" v-model.trim=\"placeholder\" placeholder=\"Placeholder text\" />\r\n</div>\r\n";
},"useData":true});
/* eslint-disable no-undef */
const cdk = require('aws-cdk-lib');
const { Template } = require('aws-cdk-lib/assertions');
const CdkResources = require('../lib/cdk-resources-stack');

// example test. To run these tests, uncomment this file along with the
// example resource in lib/cdk-resources-stack.js
test('SQS Queue Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkResources.CdkResourcesStack(app, 'MyTestStack');
  // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::SQS::Queue', {
    VisibilityTimeout: 300,
  });
});

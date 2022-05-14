const { Stack, Duration } = require('aws-cdk-lib');
const sqs = require('aws-cdk-lib/aws-sqs');

class CdkResourcesStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // eslint-disable-next-line no-unused-vars
    this.queue = new sqs.Queue(this, 'CdkResourcesQueue', {
      visibilityTimeout: Duration.seconds(300),
    });
    // console.log(queue);
  }

  static get queue() {
    return this.queue;
  }
}

module.exports = { CdkResourcesStack };

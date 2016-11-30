require('../lib/node_loader');
var AWS = require('../lib/core');

module.exports = {
  ACM: require('./acm'),
  APIGateway: require('./apigateway'),
  ApplicationAutoScaling: require('./applicationautoscaling'),
  AutoScaling: require('./autoscaling'),
  Budgets: require('./budgets'),
  CloudFormation: require('./cloudformation'),
  CloudFront: require('./cloudfront'),
  CloudHSM: require('./cloudhsm'),
  CloudSearch: require('./cloudsearch'),
  CloudSearchDomain: require('./cloudsearchdomain'),
  CloudTrail: require('./cloudtrail'),
  CloudWatch: require('./cloudwatch'),
  CloudWatchEvents: require('./cloudwatchevents'),
  CloudWatchLogs: require('./cloudwatchlogs'),
  CodeCommit: require('./codecommit'),
  CodeDeploy: require('./codedeploy'),
  CodePipeline: require('./codepipeline'),
  CognitoIdentity: require('./cognitoidentity'),
  CognitoIdentityServiceProvider: require('./cognitoidentityserviceprovider'),
  CognitoSync: require('./cognitosync'),
  ConfigService: require('./configservice'),
  DataPipeline: require('./datapipeline'),
  DeviceFarm: require('./devicefarm'),
  DirectConnect: require('./directconnect'),
  DirectoryService: require('./directoryservice'),
  Discovery: require('./discovery'),
  DMS: require('./dms'),
  DynamoDB: require('./dynamodb'),
  DynamoDBStreams: require('./dynamodbstreams'),
  EC2: require('./ec2'),
  ECR: require('./ecr'),
  ECS: require('./ecs'),
  EFS: require('./efs'),
  ElastiCache: require('./elasticache'),
  ElasticBeanstalk: require('./elasticbeanstalk'),
  ELB: require('./elb'),
  ELBv2: require('./elbv2'),
  EMR: require('./emr'),
  ES: require('./es'),
  ElasticTranscoder: require('./elastictranscoder'),
  Firehose: require('./firehose'),
  GameLift: require('./gamelift'),
  Glacier: require('./glacier'),
  IAM: require('./iam'),
  ImportExport: require('./importexport'),
  Inspector: require('./inspector'),
  Iot: require('./iot'),
  IotData: require('./iotdata'),
  Kinesis: require('./kinesis'),
  KinesisAnalytics: require('./kinesisanalytics'),
  KMS: require('./kms'),
  Lambda: require('./lambda'),
  Lightsail: require('./lightsail'),
  MachineLearning: require('./machinelearning'),
  MarketplaceCommerceAnalytics: require('./marketplacecommerceanalytics'),
  MarketplaceMetering: require('./marketplacemetering'),
  MobileAnalytics: require('./mobileanalytics'),
  OpsWorks: require('./opsworks'),
  Polly: require('./polly'),
  RDS: require('./rds'),
  Redshift: require('./redshift'),
  Rekognition: require('./rekognition'),
  Route53: require('./route53'),
  Route53Domains: require('./route53domains'),
  S3: require('./s3'),
  ServiceCatalog: require('./servicecatalog'),
  SES: require('./ses'),
  SimpleDB: require('./simpledb'),
  SMS: require('./sms'),
  Snowball: require('./snowball'),
  SNS: require('./sns'),
  SQS: require('./sqs'),
  SSM: require('./ssm'),
  StorageGateway: require('./storagegateway'),
  STS: require('./sts'),
  Support: require('./support'),
  SWF: require('./swf'),
  WAF: require('./waf'),
  WorkSpaces: require('./workspaces')
};
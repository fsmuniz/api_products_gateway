export type TEnvironment = {
  nodeEnv: string;
  port: number;
  rabbitMqUser: string;
  rabbitMqPassword: string;
  rabbitMqHost: string;
  rabbitMqPort: number;
  rabbitMqQueueName: string;
  productsIntegrationMicroservicesToken: string;
};

export type TEventSend = {
  eventName: string;
  token: string;
};

export type TResponseMessage = {
  [key: number | string]: {
    statusCode: number;
    message: string | string[];
    error: string;
  };
};

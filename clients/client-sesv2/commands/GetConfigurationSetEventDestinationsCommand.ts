import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import {
  GetConfigurationSetEventDestinationsRequest,
  GetConfigurationSetEventDestinationsResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand,
  serializeAws_restJson1GetConfigurationSetEventDestinationsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetConfigurationSetEventDestinationsCommandInput extends GetConfigurationSetEventDestinationsRequest {}
export interface GetConfigurationSetEventDestinationsCommandOutput
  extends GetConfigurationSetEventDestinationsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieve a list of event destinations that are associated with a configuration
 *             set.</p>
 *         <p>
 *             <i>Events</i> include message sends, deliveries, opens, clicks, bounces,
 *             and complaints. <i>Event destinations</i> are places that you can send
 *             information about these events to. For example, you can send event data to Amazon SNS to
 *             receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to
 *             stream data to Amazon S3 for long-term storage.</p>
 */
export class GetConfigurationSetEventDestinationsCommand extends $Command<
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetConfigurationSetEventDestinationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConfigurationSetEventDestinationsCommandInput, GetConfigurationSetEventDestinationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "GetConfigurationSetEventDestinationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetConfigurationSetEventDestinationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetConfigurationSetEventDestinationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetConfigurationSetEventDestinationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetConfigurationSetEventDestinationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetConfigurationSetEventDestinationsCommandOutput> {
    return deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

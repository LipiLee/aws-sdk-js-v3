import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { GetConfigurationSetRequest, GetConfigurationSetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetConfigurationSetCommand,
  serializeAws_restJson1GetConfigurationSetCommand,
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

export interface GetConfigurationSetCommandInput extends GetConfigurationSetRequest {}
export interface GetConfigurationSetCommandOutput extends GetConfigurationSetResponse, __MetadataBearer {}

/**
 * <p>Get information about an existing configuration set, including the dedicated IP pool
 *             that it's associated with, whether or not it's enabled for sending email, and
 *             more.</p>
 *         <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can
 *             apply to the emails you send. You apply a configuration set to an email by including a
 *             reference to the configuration set in the headers of the email. When you apply a
 *             configuration set to an email, all of the rules in that configuration set are applied to
 *             the email.</p>
 */
export class GetConfigurationSetCommand extends $Command<
  GetConfigurationSetCommandInput,
  GetConfigurationSetCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetConfigurationSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConfigurationSetCommandInput, GetConfigurationSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "GetConfigurationSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetConfigurationSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetConfigurationSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetConfigurationSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetConfigurationSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConfigurationSetCommandOutput> {
    return deserializeAws_restJson1GetConfigurationSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

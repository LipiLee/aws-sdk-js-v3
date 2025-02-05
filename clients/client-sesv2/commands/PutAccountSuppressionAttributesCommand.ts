import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { PutAccountSuppressionAttributesRequest, PutAccountSuppressionAttributesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutAccountSuppressionAttributesCommand,
  serializeAws_restJson1PutAccountSuppressionAttributesCommand,
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

export interface PutAccountSuppressionAttributesCommandInput extends PutAccountSuppressionAttributesRequest {}
export interface PutAccountSuppressionAttributesCommandOutput
  extends PutAccountSuppressionAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Change the settings for the account-level suppression list.</p>
 */
export class PutAccountSuppressionAttributesCommand extends $Command<
  PutAccountSuppressionAttributesCommandInput,
  PutAccountSuppressionAttributesCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAccountSuppressionAttributesCommandInput) {
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
  ): Handler<PutAccountSuppressionAttributesCommandInput, PutAccountSuppressionAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutAccountSuppressionAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAccountSuppressionAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAccountSuppressionAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutAccountSuppressionAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutAccountSuppressionAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAccountSuppressionAttributesCommandOutput> {
    return deserializeAws_restJson1PutAccountSuppressionAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

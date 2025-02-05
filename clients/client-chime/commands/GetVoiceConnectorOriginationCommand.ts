import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { GetVoiceConnectorOriginationRequest, GetVoiceConnectorOriginationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetVoiceConnectorOriginationCommand,
  serializeAws_restJson1GetVoiceConnectorOriginationCommand,
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

export interface GetVoiceConnectorOriginationCommandInput extends GetVoiceConnectorOriginationRequest {}
export interface GetVoiceConnectorOriginationCommandOutput
  extends GetVoiceConnectorOriginationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves origination setting details for the specified Amazon Chime Voice Connector.</p>
 */
export class GetVoiceConnectorOriginationCommand extends $Command<
  GetVoiceConnectorOriginationCommandInput,
  GetVoiceConnectorOriginationCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetVoiceConnectorOriginationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetVoiceConnectorOriginationCommandInput, GetVoiceConnectorOriginationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetVoiceConnectorOriginationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVoiceConnectorOriginationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVoiceConnectorOriginationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetVoiceConnectorOriginationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetVoiceConnectorOriginationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetVoiceConnectorOriginationCommandOutput> {
    return deserializeAws_restJson1GetVoiceConnectorOriginationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

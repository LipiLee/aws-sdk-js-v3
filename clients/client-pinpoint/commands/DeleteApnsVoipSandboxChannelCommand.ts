import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteApnsVoipSandboxChannelRequest, DeleteApnsVoipSandboxChannelResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommand,
  serializeAws_restJson1DeleteApnsVoipSandboxChannelCommand,
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

export interface DeleteApnsVoipSandboxChannelCommandInput extends DeleteApnsVoipSandboxChannelRequest {}
export interface DeleteApnsVoipSandboxChannelCommandOutput
  extends DeleteApnsVoipSandboxChannelResponse,
    __MetadataBearer {}

/**
 * <p>Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.</p>
 */
export class DeleteApnsVoipSandboxChannelCommand extends $Command<
  DeleteApnsVoipSandboxChannelCommandInput,
  DeleteApnsVoipSandboxChannelCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteApnsVoipSandboxChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteApnsVoipSandboxChannelCommandInput, DeleteApnsVoipSandboxChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "DeleteApnsVoipSandboxChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteApnsVoipSandboxChannelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteApnsVoipSandboxChannelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteApnsVoipSandboxChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteApnsVoipSandboxChannelCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteApnsVoipSandboxChannelCommandOutput> {
    return deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

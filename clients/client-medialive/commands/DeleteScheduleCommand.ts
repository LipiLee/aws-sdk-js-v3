import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteScheduleRequest, DeleteScheduleResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DeleteScheduleCommand,
  serializeAws_restJson1DeleteScheduleCommand,
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

export interface DeleteScheduleCommandInput extends DeleteScheduleRequest {}
export interface DeleteScheduleCommandOutput extends DeleteScheduleResponse, __MetadataBearer {}

/**
 * Delete all schedule actions on a channel.
 */
export class DeleteScheduleCommand extends $Command<
  DeleteScheduleCommandInput,
  DeleteScheduleCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteScheduleCommandInput, DeleteScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DeleteScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteScheduleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteScheduleCommandOutput> {
    return deserializeAws_restJson1DeleteScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

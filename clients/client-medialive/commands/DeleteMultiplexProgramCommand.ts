import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteMultiplexProgramRequest, DeleteMultiplexProgramResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DeleteMultiplexProgramCommand,
  serializeAws_restJson1DeleteMultiplexProgramCommand,
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

export interface DeleteMultiplexProgramCommandInput extends DeleteMultiplexProgramRequest {}
export interface DeleteMultiplexProgramCommandOutput extends DeleteMultiplexProgramResponse, __MetadataBearer {}

/**
 * Delete a program from a multiplex.
 */
export class DeleteMultiplexProgramCommand extends $Command<
  DeleteMultiplexProgramCommandInput,
  DeleteMultiplexProgramCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMultiplexProgramCommandInput) {
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
  ): Handler<DeleteMultiplexProgramCommandInput, DeleteMultiplexProgramCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DeleteMultiplexProgramCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMultiplexProgramRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMultiplexProgramResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMultiplexProgramCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteMultiplexProgramCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMultiplexProgramCommandOutput> {
    return deserializeAws_restJson1DeleteMultiplexProgramCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

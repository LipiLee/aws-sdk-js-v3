import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteTemplateRequest, DeleteTemplateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteTemplateCommand,
  serializeAws_restJson1DeleteTemplateCommand,
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

export interface DeleteTemplateCommandInput extends DeleteTemplateRequest {}
export interface DeleteTemplateCommandOutput extends DeleteTemplateResponse, __MetadataBearer {}

/**
 * <p>Deletes a template.</p>
 */
export class DeleteTemplateCommand extends $Command<
  DeleteTemplateCommandInput,
  DeleteTemplateCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTemplateCommandInput, DeleteTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DeleteTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTemplateCommandOutput> {
    return deserializeAws_restJson1DeleteTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

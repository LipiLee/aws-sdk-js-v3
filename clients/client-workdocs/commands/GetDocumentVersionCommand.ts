import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { GetDocumentVersionRequest, GetDocumentVersionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDocumentVersionCommand,
  serializeAws_restJson1GetDocumentVersionCommand,
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

export interface GetDocumentVersionCommandInput extends GetDocumentVersionRequest {}
export interface GetDocumentVersionCommandOutput extends GetDocumentVersionResponse, __MetadataBearer {}

/**
 * <p>Retrieves version metadata for the specified document.</p>
 */
export class GetDocumentVersionCommand extends $Command<
  GetDocumentVersionCommandInput,
  GetDocumentVersionCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDocumentVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDocumentVersionCommandInput, GetDocumentVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "GetDocumentVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDocumentVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDocumentVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDocumentVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDocumentVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDocumentVersionCommandOutput> {
    return deserializeAws_restJson1GetDocumentVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

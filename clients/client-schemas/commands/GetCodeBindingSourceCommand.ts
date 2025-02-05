import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { GetCodeBindingSourceRequest, GetCodeBindingSourceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetCodeBindingSourceCommand,
  serializeAws_restJson1GetCodeBindingSourceCommand,
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

export interface GetCodeBindingSourceCommandInput extends GetCodeBindingSourceRequest {}
export interface GetCodeBindingSourceCommandOutput extends GetCodeBindingSourceResponse, __MetadataBearer {}

/**
 * <p>Get the code binding source URI.</p>
 */
export class GetCodeBindingSourceCommand extends $Command<
  GetCodeBindingSourceCommandInput,
  GetCodeBindingSourceCommandOutput,
  SchemasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCodeBindingSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCodeBindingSourceCommandInput, GetCodeBindingSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "GetCodeBindingSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCodeBindingSourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCodeBindingSourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCodeBindingSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCodeBindingSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCodeBindingSourceCommandOutput> {
    return deserializeAws_restJson1GetCodeBindingSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

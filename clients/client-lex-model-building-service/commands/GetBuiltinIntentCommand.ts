import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { GetBuiltinIntentRequest, GetBuiltinIntentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetBuiltinIntentCommand,
  serializeAws_restJson1GetBuiltinIntentCommand,
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

export interface GetBuiltinIntentCommandInput extends GetBuiltinIntentRequest {}
export interface GetBuiltinIntentCommandOutput extends GetBuiltinIntentResponse, __MetadataBearer {}

/**
 * <p>Returns information about a built-in intent.</p>
 *          <p>This operation requires permission for the
 *         <code>lex:GetBuiltinIntent</code> action.</p>
 */
export class GetBuiltinIntentCommand extends $Command<
  GetBuiltinIntentCommandInput,
  GetBuiltinIntentCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBuiltinIntentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBuiltinIntentCommandInput, GetBuiltinIntentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetBuiltinIntentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBuiltinIntentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBuiltinIntentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBuiltinIntentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBuiltinIntentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBuiltinIntentCommandOutput> {
    return deserializeAws_restJson1GetBuiltinIntentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

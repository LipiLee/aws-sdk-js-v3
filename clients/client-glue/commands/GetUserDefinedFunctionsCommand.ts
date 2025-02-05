import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetUserDefinedFunctionsRequest, GetUserDefinedFunctionsResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetUserDefinedFunctionsCommand,
  serializeAws_json1_1GetUserDefinedFunctionsCommand,
} from "../protocols/Aws_json1_1";
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

export interface GetUserDefinedFunctionsCommandInput extends GetUserDefinedFunctionsRequest {}
export interface GetUserDefinedFunctionsCommandOutput extends GetUserDefinedFunctionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves multiple function definitions from the Data Catalog.</p>
 */
export class GetUserDefinedFunctionsCommand extends $Command<
  GetUserDefinedFunctionsCommandInput,
  GetUserDefinedFunctionsCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetUserDefinedFunctionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUserDefinedFunctionsCommandInput, GetUserDefinedFunctionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetUserDefinedFunctionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUserDefinedFunctionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetUserDefinedFunctionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUserDefinedFunctionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetUserDefinedFunctionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUserDefinedFunctionsCommandOutput> {
    return deserializeAws_json1_1GetUserDefinedFunctionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { DescribeCodeBindingRequest, DescribeCodeBindingResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeCodeBindingCommand,
  serializeAws_restJson1DescribeCodeBindingCommand,
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

export interface DescribeCodeBindingCommandInput extends DescribeCodeBindingRequest {}
export interface DescribeCodeBindingCommandOutput extends DescribeCodeBindingResponse, __MetadataBearer {}

/**
 * <p>Describe the code binding URI.</p>
 */
export class DescribeCodeBindingCommand extends $Command<
  DescribeCodeBindingCommandInput,
  DescribeCodeBindingCommandOutput,
  SchemasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCodeBindingCommandInput) {
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
  ): Handler<DescribeCodeBindingCommandInput, DescribeCodeBindingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "DescribeCodeBindingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCodeBindingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCodeBindingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCodeBindingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeCodeBindingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCodeBindingCommandOutput> {
    return deserializeAws_restJson1DescribeCodeBindingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

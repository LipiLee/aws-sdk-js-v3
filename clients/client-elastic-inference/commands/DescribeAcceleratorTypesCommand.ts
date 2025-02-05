import { ElasticInferenceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticInferenceClient";
import { DescribeAcceleratorTypesRequest, DescribeAcceleratorTypesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeAcceleratorTypesCommand,
  serializeAws_restJson1DescribeAcceleratorTypesCommand,
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

export interface DescribeAcceleratorTypesCommandInput extends DescribeAcceleratorTypesRequest {}
export interface DescribeAcceleratorTypesCommandOutput extends DescribeAcceleratorTypesResponse, __MetadataBearer {}

/**
 * <p>
 *             Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput.
 *         </p>
 */
export class DescribeAcceleratorTypesCommand extends $Command<
  DescribeAcceleratorTypesCommandInput,
  DescribeAcceleratorTypesCommandOutput,
  ElasticInferenceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAcceleratorTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticInferenceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAcceleratorTypesCommandInput, DescribeAcceleratorTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticInferenceClient";
    const commandName = "DescribeAcceleratorTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAcceleratorTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAcceleratorTypesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAcceleratorTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAcceleratorTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAcceleratorTypesCommandOutput> {
    return deserializeAws_restJson1DescribeAcceleratorTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

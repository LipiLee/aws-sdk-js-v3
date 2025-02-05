import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { CreateDetectorModelRequest, CreateDetectorModelResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDetectorModelCommand,
  serializeAws_restJson1CreateDetectorModelCommand,
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

export interface CreateDetectorModelCommandInput extends CreateDetectorModelRequest {}
export interface CreateDetectorModelCommandOutput extends CreateDetectorModelResponse, __MetadataBearer {}

/**
 * <p>Creates a detector model.</p>
 */
export class CreateDetectorModelCommand extends $Command<
  CreateDetectorModelCommandInput,
  CreateDetectorModelCommandOutput,
  IoTEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDetectorModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDetectorModelCommandInput, CreateDetectorModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "CreateDetectorModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDetectorModelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDetectorModelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDetectorModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDetectorModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDetectorModelCommandOutput> {
    return deserializeAws_restJson1CreateDetectorModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
